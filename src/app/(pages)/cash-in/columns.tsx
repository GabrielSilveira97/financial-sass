"use client";
import { CashIn } from "@/types/cash-inTypes";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

const cashInColumns: ColumnDef<CashIn>[] = [
   {
      accessorKey: "data_entrada",
      header: ({ column }) => {
         return (
            <div
               className="cursor-pointer flex items-center gap-2"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               Data Entrada
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
      accessorKey: "tipo_recebimento",
      header: "Recebimento",
   },
   {
      accessorKey: "tipo_banco",
      header: "Banco",
   },
   {
      accessorKey: "valor",
      header: ({ column }) => {
         return (
            <div
               className="cursor-pointer flex items-center gap-2"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               Valor
               <ArrowUpDown size={15} />
            </div>
         );
      },
   },
];

export default cashInColumns;
