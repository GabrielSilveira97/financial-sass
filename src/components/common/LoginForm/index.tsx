"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
   FieldDescription,
   FieldGroup,
   FieldLabel,
   FieldLegend,
   FieldSet,
   Field,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLogin } from "@/app/hooks/useLogin";

const LoginForm = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const {
      mutate: login,
      isPending,
      isError,
      error,
      isSuccess,
      data,
   } = useLogin();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      login({ username, password });
   };

   return (
      <Card className="p-10">
         <form>
            <FieldSet>
               <FieldLegend>Login</FieldLegend>
               <FieldDescription>
                  Insira suas credenciais para acessar.
               </FieldDescription>
               <FieldGroup>
                  <Field>
                     <FieldLabel htmlFor="email">Email</FieldLabel>
                     <Input
                        id="email"
                        autoComplete="off"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </Field>
                  <Field>
                     <FieldLabel htmlFor="password">Senha</FieldLabel>
                     <Input
                        id="password"
                        autoComplete="off"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </Field>
               </FieldGroup>
               <Button
                  className="cursor-pointer"
                  onClick={handleSubmit}
                  disabled={isPending}
               >
                  {isPending ? "Entrando..." : "Entrar"}
               </Button>
            </FieldSet>
            {isError && (
               <div className="text-red-500 text-sm">
                  {Array.isArray((error as any)?.response?.data?.detail)
                     ? (error as any).response.data.detail.map(
                          (err: any, i: number) => <p key={i}>{err.msg}</p>,
                       )
                     : (error as any)?.response?.data?.detail ||
                       "Erro ao fazer login"}
               </div>
            )}
            {isSuccess && (
               <p className="text-green-600 text-sm">
                  Login realizado com sucesso!
               </p>
            )}
         </form>
      </Card>
   );
};

export default LoginForm;
