import {
   Users,
   BanknoteArrowDown,
   BanknoteArrowUp,
   ChartLine,
} from "lucide-react";

interface menuItems {
   id: number;
   title: string;
   pathname: string;
   icon: React.ElementType;
}

export const menuItems: menuItems[] = [
   {
      id: 1,
      title: "Usuários",
      pathname: "/users",
      icon: Users,
   },
   {
      id: 2,
      title: "Entradas",
      pathname: "/cash-in",
      icon: BanknoteArrowDown,
   },
   {
      id: 3,
      title: "Despesas",
      pathname: "/cash-out",
      icon: BanknoteArrowUp,
   },
   {
      id: 4,
      title: "Balanço",
      pathname: "/balance",
      icon: ChartLine,
   },
];
