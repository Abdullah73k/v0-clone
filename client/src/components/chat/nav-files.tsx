"use client";

import { ChevronRight, File } from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux/hooks";
import { chatActions } from "../../store/chat-slice";

export function NavFiles() {
	const message = useAppSelector((state) => state.chat.messages);
	const dispatch = useAppDispatch();

	if (!message[0]) return <p>no file</p>;
	const { result } = message[0];
	const { components, main } = result;

	function handleFileSelection(key: string) {
		const file = components.filter((component) => component?.name === key);
		const code = file[0];
		dispatch(chatActions.setSelectedFile(code));
	}

	function handleMainFileSelection() {
		dispatch(chatActions.setSelectedFile(main));
	}

	return (
		<SidebarGroup className="p-2 m-1">
			<SidebarGroupLabel>{`Files`}</SidebarGroupLabel>
			<SidebarMenu>
				<Collapsible asChild defaultOpen={true} className="group/collapsible">
					<SidebarMenuItem>
						<CollapsibleTrigger asChild>
							<SidebarMenuButton tooltip="title">
								<span>{`Components`}</span>
								<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
							</SidebarMenuButton>
						</CollapsibleTrigger>
						<CollapsibleContent>
							<SidebarMenuSub>
								{/* here is where to loop */}
								{components?.map((component) => (
									<SidebarMenuSubItem key={component?.name}>
										<SidebarMenuSubButton asChild>
											<a
												onClick={() =>
													component && handleFileSelection(component.name)
												}
											>
												<File />
												<span>{component && component.name}</span>
											</a>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								))}
							</SidebarMenuSub>
						</CollapsibleContent>
					</SidebarMenuItem>
				</Collapsible>
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a onClick={handleMainFileSelection}>
							<span>{main?.name}</span>
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
}
