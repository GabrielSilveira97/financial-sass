import { balance } from "@/data/mockBalance";

const BalancePage = () => {
   return (
      <main>
         <p>Entradas : {balance.total_entradas}</p>
         <p>Despesas : {balance.total_despesas}</p>
         <p>Valor Liquido : {balance.valor_liquido}</p>
         <p>Ticket médio : {balance.ticket_medio}</p>
      </main>
   );
};

export default BalancePage;
