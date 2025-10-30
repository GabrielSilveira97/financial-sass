"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "../ToggleTheme";
import { usePathname } from "next/navigation";
import { menuItems } from "../AppSidebar/menu";
const AppNavbar = () => {
   const pathname = usePathname();

   const currentPage = menuItems.find((path) => pathname === path.pathname);

   return (
      <nav className="flex justify-between p-5">
         <section className="flex items-center gap-5">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-3xl ">{currentPage?.title}</h1>
         </section>
         <ModeToggle />
      </nav>
   );
};

export default AppNavbar;
