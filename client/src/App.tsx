import { AppSidebar } from "./components/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import ChatInput from "./components/main/ChatInput";
import { useAppSelector } from "./hooks/redux/hooks";
import Recents from "./components/recents/Recents";
import Chat from "./components/chat/Chat";

export default function App() {
	const activePage = useAppSelector((state) => state.page.currentPage);
	let pageToRender;

	switch (activePage) {
		case "home":
			pageToRender = (
				<div className="flex justify-center items-center flex-col gap-8 h-1/2">
					<h2 className="text-5xl">What can I help you ship?</h2>
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
	}

	return (
		<SidebarProvider>
			<AppSidebar />
			
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						{/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
					</div>
				</header>

				{/* {pageToRender} */}
				<Chat />
			</SidebarInset>
		</SidebarProvider>
	);
}
