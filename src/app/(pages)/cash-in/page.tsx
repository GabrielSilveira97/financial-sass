import { DataTable } from "@/components/common/data-table";
import cashInColumns from "../cash-in/columns";
import { cashIns } from "@/data/mockCashIn";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DialogForm from "@/components/common/DialogForm";

const CashInPage = () => {
   return (
      <main className="px-10 flex flex-col gap-5 py-5">
         <section className="flex justify-end gap-2">
            <Dialog>
               <DialogTrigger asChild>
                  <Button variant="default">Nova Entrada</Button>
               </DialogTrigger>
               <DialogForm title="Nova Entrada" />
            </Dialog>
            <Button variant="secondary">
               <FileText />
            </Button>
         </section>
         <section>
            <DataTable columns={cashInColumns} data={cashIns} />
         </section>
      </main>
   );
};

export default CashInPage;
