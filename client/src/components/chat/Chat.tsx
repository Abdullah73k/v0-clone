import { AppSidebar } from "./app-sidebar-chat";
import { Card } from "@/components/ui/card";
import CodeFile from "./code-file";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Chat() {
	return (
		<div className="h-1/1 flex justify-center">
			<div className="w-1/1 m-4 flex">
				<Card className="shadow-none rounded-xl flex flex-1 flex-row m-2 p-0">
					<AppSidebar />
					<ScrollArea className="flex flex-1 flex-col m-4 p-2">
						<CodeFile />
					</ScrollArea>
				</Card>
			</div>
		</div>
	);
}
