"use client";
import { CashOut } from "@/types/cash-outTypes";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const cashOutColumns: ColumnDef<CashOut>[] = [
   {
      accessorKey: "data_saida",
      header: ({ column }) => {
         return (
            <div
               className="cursor-pointer flex items-center gap-2"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               Data Saída
               <ArrowUpDown size={15} />
            </div>
         );
      },
      cell: ({ row }) => {
         const dateString = row.getValue("data_saida") as string;
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
      accessorKey: "tipo_pagamento",
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

export default cashOutColumns;
