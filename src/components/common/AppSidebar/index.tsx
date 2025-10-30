"use client";
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "./menu";
import { CircleDollarSign } from "lucide-react";

const AppSidebar = () => {
   const pathname = usePathname();

   return (
      <Sidebar>
         <SidebarHeader className="flex justify-center items-center py-10">
            <CircleDollarSign size={75} className="text-primary" />
         </SidebarHeader>
         <SidebarContent className="p-5">
            <SidebarGroup className="gap-4">
               {menuItems.map((item) => {
                  return (
                     <Link
                        key={item.id}
                        className={
                           pathname === item.pathname
                              ? "flex items-center gap-3 bg-input p-2 rounded transition-all"
                              : "flex items-center gap-3 hover:bg-input p-2 rounded transition-all"
                        }
                        href={item.pathname}
                     >
                        <item.icon />
                        {item.title}
                     </Link>
                  );
               })}
            </SidebarGroup>
         </SidebarContent>
         <SidebarFooter className="flex justify-end">
            <p className="text-sm">
               powered by <span>DAST</span>
            </p>
         </SidebarFooter>
      </Sidebar>
   );
};

export default AppSidebar;
