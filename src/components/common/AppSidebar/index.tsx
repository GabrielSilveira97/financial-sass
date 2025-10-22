import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarHeader,
} from "@/components/ui/sidebar";
import { BanknoteArrowDown, BanknoteArrowUp, ChartLine, Users } from "lucide-react";
import Link from "next/link";

const AppSidebar = () => {
   return (
      <Sidebar>
         <SidebarHeader className="flex justify-center items-center py-10">
            <h1>Financial App</h1>
         </SidebarHeader>
         <SidebarContent className="p-5">
            <SidebarGroup className="gap-3">
               <Link className="flex items-center gap-3" href="/users"><Users/>Users</Link>
               <Link className="flex items-center gap-3" href="/cash-in"><BanknoteArrowDown/>Entradas</Link>
               <Link className="flex items-center gap-3" href="/cash-out"><BanknoteArrowUp/>Saídas</Link>
               <Link className="flex items-center gap-3" href="/balance"><ChartLine/>Balanço</Link>
            </SidebarGroup>
         </SidebarContent>
         <SidebarFooter className="flex justify-end">
            <p className="text-sm">powered by <span>DAST</span></p>
         </SidebarFooter>
      </Sidebar>
   );
};

export default AppSidebar;
