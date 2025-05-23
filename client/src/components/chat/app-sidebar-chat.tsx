import {
	Sidebar,
	SidebarContent,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { NavFiles } from "./nav-files";

export function AppSidebar() {
	return (
		<SidebarProvider className="w-2/9">
			<Sidebar collapsible="none">
				<SidebarContent>
					<NavFiles />
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	);
}
