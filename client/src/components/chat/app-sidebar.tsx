
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavFiles } from "./nav-files"


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <NavFiles />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
