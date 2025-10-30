import BalanceCard from "@/components/common/BalanceCard";
import { balance } from "@/data/mockBalance";
import {
   BanknoteArrowDown,
   BanknoteArrowUp,
   Receipt,
   TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
const BalancePage = () => {
   return (
      <main className="px-10 flex flex-col gap-5 py-5">
         <section className="flex justify-end gap-2">
            <Button variant="secondary">
               <FileText />
            </Button>
         </section>
         <section className="grid lg:grid-cols-2 gap-4">
            <BalanceCard
               title="Total Entradas"
               icon={BanknoteArrowDown}
               value={balance.total_entradas}
            />
            <BalanceCard
               title="Total Despesas"
               icon={BanknoteArrowUp}
               value={balance.total_despesas}
            />
            <BalanceCard
               title="Valor Líquido"
               icon={TrendingUp}
               value={balance.valor_liquido}
            />
            <BalanceCard
               title="Ticket Médio"
               icon={Receipt}
               value={balance.ticket_medio}
            />
         </section>
      </main>
   );
};

export default BalancePage;
