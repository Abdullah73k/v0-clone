import { AppSidebar } from "./app-sidebar-chat";
import { Card } from "@/components/ui/card";
import CodeFile from "./code-file";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Chat() {
	return (
		<div className="h-1/1 flex">
			<div className="h-1/1 w-3/10 flex items-center justify-center">
				<div className="h-34/36 w-11/12">chat area</div>
			</div>
			<div className="w-7/10 flex">
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
