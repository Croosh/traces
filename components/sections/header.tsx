import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";

async function Header() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="full  py-5 px-6 flex justify-between select-none ">
      <h1 className=" text-[#7c3aed] font-bold text-xl">Traces</h1>
      <form action={signOut}>
        <div className="flex gap-4 justify-center items-center">
          <span>{user?.email}</span>
          <Button variant={"outline"} size={"sm"}>
            Sign Out
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Header;
