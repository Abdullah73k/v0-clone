
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavFiles } from "./nav-files"


export function AppSidebar() {
  return (
    <Sidebar className="w-1/5" variant="sidebar" side="right" collapsible="none">
      <SidebarContent>
        <NavFiles />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
