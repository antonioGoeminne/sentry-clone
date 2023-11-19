import { axios } from "@api/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProjects = () => {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: async ({ signal }: any) => {
      const { data } = await axios.get("/projects/all", {
        signal,
      });

      return data;
    },
  });
  return [query?.data, query.isLoading];
};

export const useGetProjectsByText = (text: string) => {
  const query = useQuery({
    queryKey: ["projects", text],
    queryFn: async ({ signal }: any) => {
      const { data } = await axios.get("/projects", {
        params: {
          text,
        },
        signal,
      });

      return data;
    },
  });
  return [query?.data, query.isLoading];
};