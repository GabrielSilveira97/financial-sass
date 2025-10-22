"use client";
import { useUsers } from "@/app/hooks/useUsers";
import { Spinner } from "@/components/ui/spinner";
import { ArrowBigDown } from "lucide-react";

const UsersPage = () => {
   const { data: users, isLoading, isError } = useUsers();

   type User = {
      nome: string;
      id: number;
      email: string;
      telefone: string;
   };

   return (
      <main>
         <h1 className="">Users page</h1>
         <section className="">
            <h1>Usuários</h1>
            <ArrowBigDown />
            {isLoading ? (
               <Spinner />
            ) : (
               users.map((user: User) => {
                  return <p key={user.id}>{user.nome}</p>;
               })
            )}
         </section>
      </main>
   );
};

export default UsersPage;
