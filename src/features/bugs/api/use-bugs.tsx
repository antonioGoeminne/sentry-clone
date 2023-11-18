import { axios } from "@api/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Bug } from "../types";

const useGetBugs = (project_id: string) => {
  const query = useQuery({
    queryKey: ["bugs", project_id],
    queryFn: async ({ signal }: any) => {
      const { data } = await axios.get(`/bugs/${project_id}`, {
        signal,
      });

      return data;
    },
  });
  return [query?.data, query.isLoading];
};

const usePostBug = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newData) => {
      return axios.post("/bugs", newData);
    },
    onMutate: async (data: Bug) => {
      await queryClient.cancelQueries({
        queryKey: ["bugs", data.project_id],
      });

      // Snapshot the previous value
      const previousRequest = queryClient.getQueryData([
        "bugs",
        data.project_id,
      ]);
      // Optimistically update to the new value
      queryClient.setQueryData(["bugs", data.project_id], (prev: Bug[]) => [
        ...prev,
        { ...data },
      ]);

      // Return a context object with the snapshotted value
      return { previousRequest };
    },
  });
  return {
    mutate: (data: Bug) => mutation.mutate(data),
  };
};

export { useGetBugs, usePostBug };
