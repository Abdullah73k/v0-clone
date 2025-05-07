import { Clock, Cherry, Shapes } from "lucide-react";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import NavCollapsible from "./nav-collapsible";

const info = [
	{
		name: "Recents",
		icon: Clock,
	},
	{
		name: "Projects",
		icon: Cherry,
	},
	{
		name: "Community",
		icon: Shapes,
	},
];

export default function NavMain() {
	return (
		<>
			<SidebarGroup className="flex gap-2">
				<Button className="group-data-[collapsible=icon]:hidden">New Chat</Button>
				<SidebarMenu>
					{info.map((item) => (
						<SidebarMenuItem key={item.name}>
							<SidebarMenuButton asChild tooltip={item.name}>
								<a>
									<item.icon />
									<span>{item.name}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
                <NavCollapsible />
			</SidebarGroup>
		</>
	);
}
