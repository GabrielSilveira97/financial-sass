"use client";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/usersTypes";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const userColumns: ColumnDef<User>[] = [
   {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
      accessorKey: "nome",
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




