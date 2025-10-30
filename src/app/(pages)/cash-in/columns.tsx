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
      cell: ({ row }) => {
         const dateString = row.getValue("data_entrada") as string;
         const date = new Date(dateString);

         const formatted = date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
         });

         return <div>{formatted}</div>;
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
      cell: ({ row }) => {
         const amount = parseFloat(row.getValue("valor"));
         const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BRL",
         }).format(amount);

         return <div>{formatted}</div>;
      },
   },
];

export default cashInColumns;
