import { DataTable } from "@/components/common/data-table";
import { cashOuts } from "@/data/mockCashOut";
import cashOutColumns from "./columns";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogForm from "@/components/common/DialogForm";

const CashOutPage = () => {
   return (
      <main className="px-10 flex flex-col gap-5 py-5">
         <section className="flex justify-end gap-2">
            <Dialog>
               <DialogTrigger asChild>
                  <Button variant="default">Nova Despesa</Button>
               </DialogTrigger>
               <DialogForm title="Nova Despesa" />
            </Dialog>
            <Button variant="secondary">
               <FileText />
            </Button>
         </section>
         <section>
            <DataTable data={cashOuts} columns={cashOutColumns} />
         </section>
      </main>
   );
};

export default CashOutPage;
