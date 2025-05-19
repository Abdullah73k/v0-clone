import { AppSidebar } from "./app-sidebar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import CodeFile from "./code-file";

export default function Chat() {

	return (
		<div className="h-1/1 flex">
			<div className="h-1/1 w-1/3 flex items-center justify-center">
				<div className="h-34/36 w-11/12">chat area</div>
			</div>
			<div className="h-1/1 w-2/3 flex">
				<AppSidebar />
				<Card className="w-4/5 shadow-none rounded-xs">
					<ScrollArea className="h-1/1 m-2">
						<CodeFile />
					</ScrollArea>
				</Card>
			</div>
		</div>
	);
}
