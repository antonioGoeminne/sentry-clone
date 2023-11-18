import { axios } from "@api/axios";
import { useQuery } from "@tanstack/react-query";

const useGetBugs = (project_id: string) => {
  const query = useQuery({
    queryKey: ["bug", project_id],
    queryFn: async ({ signal }: any) => {
      const { data } = await axios.get(`/bugs/${project_id}`, {
        signal,
      });

      return data;
    },
  });
  return [query?.data, query.isLoading];
};

export { useGetBugs };
