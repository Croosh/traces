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
    <div className="overflow-hidden max-w-screen min-h-screen flex flex-col relative">
      <div className="flex ">
        <div className="flex px-6 py-8 gap-4 flex-col w-1/4 justify-center bg-stone-100">
          <Header />
          <div className="flex flex-col">
            <Sidebar />
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className=" grow">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
