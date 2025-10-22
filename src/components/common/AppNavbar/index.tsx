import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "../ToggleTheme";
const AppNavbar = () => {
    return(
        <nav className="flex justify-between p-5 lg:justify-end">
            <SidebarTrigger className="lg:hidden"/>
            <ModeToggle/>
        </nav>
    )
}


export default AppNavbar