import AppNavbar from "@/components/common/AppNavbar";
import AppSidebar from "@/components/common/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const homeLayout = ({
   children,
}: Readonly<{ children: React.ReactNode }>) => {
   return (
      <SidebarProvider>
         <AppSidebar />
         <main className="w-full">
            <AppNavbar/>
            {children}
         </main>
      </SidebarProvider>
   );
};

export default homeLayout;
