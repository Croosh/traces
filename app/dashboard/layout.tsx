import Header from "@/components/sections/header";
import Sidebar from "@/components/sections/sidebar";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
async function Layout({ children }: { children: ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="overflow-hidden max-w-screen min-h-screen flex flex-col">
      <Header />
      <div className="flex ">
        <Sidebar />
        <Separator orientation="vertical" />
        <div className=" grow">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
