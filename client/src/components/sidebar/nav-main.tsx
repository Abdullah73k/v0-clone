import { Clock, Cherry, Shapes } from "lucide-react";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import NavCollapsible from "./nav-collapsible";
import { useAppDispatch } from "@/hooks/redux/hooks";
import { pageActions } from "../store/page-slice";

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
	const dispatch = useAppDispatch();

	function handleNewChat() {
		dispatch(pageActions.setPage("home"));
	}

	return (
		<>
			<SidebarGroup className="flex gap-2">
				<Button
					className="group-data-[collapsible=icon]:hidden"
					onClick={handleNewChat}
				>
					New Chat
				</Button>
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
