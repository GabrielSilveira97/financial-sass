"use client";
import * as React from "react";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import {
   ColumnDef,
   ColumnFiltersState,
   flexRender,
   getFilteredRowModel,
   getCoreRowModel,
   getPaginationRowModel,
   getSortedRowModel,
   SortingState,
   useReactTable,
} from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Input } from "../ui/input";
interface DataTableProps<TData, TValue> {
   columns: ColumnDef<TData, TValue>[];
   data: TData[];
}

export const DataTable = <TData, TValue>({
   columns,
   data,
}: DataTableProps<TData, TValue>) => {
   const [sorting, setSorting] = React.useState<SortingState>([]);
   const [rowSelection, setRowSelection] = React.useState({});
   const [columnFilters, setColumnFilter] = React.useState<ColumnFiltersState>([])

   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      onRowSelectionChange: setRowSelection,
      onColumnFiltersChange: setColumnFilter,
      getFilteredRowModel: getFilteredRowModel(),
      state: {
         sorting,
         rowSelection,
         columnFilters,
      },
   });

   return (
      <div>
         <div>
            <div className="max-w-56 pb-5">
               <Input placeholder={`Filtrar`} value={(table.getColumn("nome")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("nome")?.setFilterValue(event.target.value)}/>
            </div>
            <Table>
               <TableHeader>
                  {table.getHeaderGroups().map((headersGroup) => (
                     <TableRow key={headersGroup.id}>
                        {headersGroup.headers.map((header) => {
                           return (
                              <TableHead key={header.id}>
                                 {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                         header.column.columnDef.header,
                                         header.getContext(),
                                      )}
                              </TableHead>
                           );
                        })}
                     </TableRow>
                  ))}
               </TableHeader>
               <TableBody>
                  {table.getRowModel().rows?.length ? (
                     table.getRowModel().rows.map((row) => (
                        <TableRow
                           key={row.id}
                           className="cursor-pointer"
                           data-state={row.getIsSelected() && "selected"}
                        >
                           {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                 {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                 )}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell colSpan={columns.length}>
                           Sem resultados
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>
         </div>
         <div className="flex items-center justify-end space-x-2 py-4">
            <Button
               variant="outline"
               size="sm"
               onClick={() => table.previousPage()}
               disabled={!table.getCanPreviousPage()}
            >
               <ArrowLeft />
            </Button>
            <Button
               variant="outline"
               size="sm"
               onClick={() => table.nextPage()}
               disabled={!table.getCanNextPage()}
            >
               <ArrowRight />
            </Button>
         </div>
      </div>
   );
};
