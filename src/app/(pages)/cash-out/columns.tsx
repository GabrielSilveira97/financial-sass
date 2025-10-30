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
   },
];

export default cashOutColumns;
