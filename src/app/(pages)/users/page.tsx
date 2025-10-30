"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../../components/common/data-table";
import userColumns from "./columns";
import { users } from "@/data/mockUsers";
import { FileText } from "lucide-react";
import DialogForm from "@/components/common/DialogForm";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const UsersPage = () => {
   return (
      <main className="px-10 flex flex-col gap-5 py-5">
         <section className="flex justify-end gap-2">
            <Dialog>
               <DialogTrigger asChild>
                  <Button variant="default">Novo Usuário</Button>
               </DialogTrigger>
               <DialogForm title="Novo Usuário" />
            </Dialog>
            <Button variant="secondary">
               <FileText />
            </Button>
         </section>
         <section>
            <DataTable columns={userColumns} data={users} />
         </section>
      </main>
   );
};

export default UsersPage;
