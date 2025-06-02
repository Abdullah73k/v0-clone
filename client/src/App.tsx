import { AppSidebar } from "@/components/app-sidebar-global";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAppSelector } from "@/hooks/redux/hooks";
import Chat from "./components/chat/Chat";
import Recents from "./components/recents/Recents";
import ChatInput from "./components/main/ChatInput";

export default function App() {
	const activePage = useAppSelector((state) => state.page.currentPage);
	let pageToRender;

	switch (activePage) {
		case "home":
			pageToRender = (
				<div className="flex flex-1 flex-col gap-8 p-4 pt-0 justify-center items-center mb-64">
					<h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl">What can I help you ship?</h1>
					<ChatInput />

				</div>
			);
			break;
		case "recents":
			pageToRender = <Recents />;
			break;
		case "chat":
			pageToRender = <Chat />;
			break;
		default:
			pageToRender = <ChatInput />;
			break;
	}

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
					</div>
				</header>
				{pageToRender}
				{/* <Chat /> */}
			</SidebarInset>
		</SidebarProvider>
	);
}
