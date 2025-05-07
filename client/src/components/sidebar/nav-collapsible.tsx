import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

const dummyProjects = ["Apple home page", "Google calendar", "Linux"];

export default function NavCollapsible() {
	return (
		<Accordion type="multiple" className="w-full group-data-[collapsible=icon]:hidden">
			{/* Favorite Projects */}
			<AccordionItem value="favorite-projects">
				<AccordionTrigger>Favorite Projects</AccordionTrigger>
				<AccordionContent>
					<div className="border border-dashed rounded-md p-3 text-sm text-muted-foreground">
						Favorite projects that you use often.
					</div>
				</AccordionContent>
			</AccordionItem>

			{/* Favorite Chats */}
			<AccordionItem value="favorite-chats">
				<AccordionTrigger>Favorite Chats</AccordionTrigger>
				<AccordionContent>
					<div className="border border-dashed rounded-md p-3 text-sm text-muted-foreground">
						Favorite chats that you use often.
					</div>
				</AccordionContent>
			</AccordionItem>

			{/* Recent */}
			<AccordionItem value="recent">
				<AccordionTrigger>Recent</AccordionTrigger>
				<AccordionContent>
					<SidebarMenu>
						{dummyProjects.map((project) => (
							<SidebarMenuItem key={project}>
								<SidebarMenuButton asChild>
									<a>
										<span>{project}</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
