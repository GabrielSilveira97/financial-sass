import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";

interface LoginData {
   username: string;
   password: string;
}

const loginRequest = async ({ username, password }: LoginData) => {
   const params = new URLSearchParams();
   params.append("grant_type", "password");
   params.append("username", username);
   params.append("password", password);
   params.append("scope", "");
   params.append("client_id", "");
   params.append("client_secret", "");

   const { data } = await api.post("/auth/login", params, {
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
      },
   });

   return data;
};

export function useLogin() {
   return useMutation({
      mutationFn: loginRequest,
      onSuccess: (data) => {
         localStorage.setItem("access_token", data.access_token);
         localStorage.setItem("token_type", data.token_type);
         console.log(data);
      },
      onError: (error) => {
         console.error("Erro no login:", error);
      },
   });
}
