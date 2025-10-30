"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../../components/common/data-table";
import userColumns from "./columns";
import { users } from "@/data/mockUsers";

const UsersPage = () => {
   return (
      <main className="px-10 flex flex-col gap-5 py-5">
         <section className="flex justify-end">
            <Button variant="default" className="cursor-pointer">
               Novo Usuário
            </Button>
         </section>
         <section>
            <DataTable columns={userColumns} data={users} />
         </section>
      </main>
   );
};

export default UsersPage;
