import BalanceCard from "@/components/common/BalanceCard";
import { balance } from "@/data/mockBalance";
import {
   BanknoteArrowDown,
   BanknoteArrowUp,
   Receipt,
   TrendingUp,
} from "lucide-react";

const BalancePage = () => {
   return (
      <main className="grid grid-cols-2 gap-4 p-10 ">
         <BalanceCard
            title="Total Entradas"
            icon={BanknoteArrowUp}
            value={balance.total_entradas}
         />
         <BalanceCard
            title="Total Despesas"
            icon={BanknoteArrowDown}
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
      </main>
   );
};

export default BalancePage;
