import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrencyBRL } from "@/utils/formatBrl";

interface CardProps {
   title: string;
   icon: React.ElementType;
   value: number;
}

const BalanceCard = ({ title, icon: Icon, value }: CardProps) => {
   return (
      <Card className="flex flex-col gap-10 ">
         <CardHeader className="flex justify-between">
            <CardTitle className="text-xl">{title}</CardTitle>
            <Icon className="text-primary" />
         </CardHeader>
         <CardContent>
            <h1 className="text-4xl">{formatCurrencyBRL(value)}</h1>
         </CardContent>
      </Card>
   );
};

export default BalanceCard;
