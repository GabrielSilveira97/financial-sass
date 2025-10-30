"use client";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/usersTypes";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const userColumns: ColumnDef<User>[] = [
   {
      accessorKey: "id",
      header: ({ column }) => {
         return (
            <div
               className="cursor-pointer flex items-center gap-2"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               ID
               <ArrowUpDown size={15} />
            </div>
         );
      },
   },
   {
      accessorKey: "name",
      header: "Nome",
   },
   {
      accessorKey: "email",
      header: "Email",
   },
   {
      accessorKey: "telefone",
      header: "Telefone",
   },
];

export default userColumns;
