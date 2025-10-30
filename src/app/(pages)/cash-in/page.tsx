import { DataTable } from "@/components/common/data-table";
import cashInColumns from "../cash-in/columns";
import { cashIns } from "@/data/mockCashIn";
import { Button } from "@/components/ui/button";

const CashInPage = () => {
   return (
      <main className="px-10 flex flex-col gap-5 py-5">
         <section className="flex justify-end">
            <Button variant="default" className="cursor-pointer">
               Nova Entrada
            </Button>
         </section>
         <section>
            <DataTable columns={cashInColumns} data={cashIns} />
         </section>
      </main>
   );
};

export default CashInPage;
