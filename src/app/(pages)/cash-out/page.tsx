import { DataTable } from "@/components/common/data-table";
import { cashOuts } from "@/data/mockCashOut";
import cashOutColumns from "./columns";
import { Button } from "@/components/ui/button";

const CashOutPage = () => {
   return (
      <main className="px-10 flex flex-col gap-5 py-5">
         <section className="flex justify-end">
            <Button variant="default" className="cursor-pointer">
               Nova Despesa
            </Button>
         </section>
         <section>
            <DataTable data={cashOuts} columns={cashOutColumns} />
         </section>
      </main>
   );
};

export default CashOutPage;
