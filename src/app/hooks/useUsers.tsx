import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const getUsers = async () => {
   const response = await api.get("/users");
   return response.data;
};

export const useUsers = () => {
   return useQuery({
      queryKey: ["users"],
      queryFn: getUsers,
   });
};
