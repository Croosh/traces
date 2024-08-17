import Header from "@/components/sections/header";
import Sidebar from "@/components/sections/sidebar";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden max-w-screen min-h-screen flex flex-col">
      <Header />
      <div className="flex border-2">
        <Sidebar />
        <Separator orientation="vertical" />
        <div className="border-2 grow">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
