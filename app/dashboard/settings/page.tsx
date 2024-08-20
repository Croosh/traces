import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";

async function Page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="  p-8 flex flex-col gap-3">
      <div className="flex w-full justify-between items-end">
        <h2 className="font-bold text-3xl">Settings</h2>
      </div>
      <form action={signOut}>
        <div className="flex gap-4 justify-center items-center">
          <span>{user?.email}</span>
          <Button variant={"destructive"} size={"sm"}>
            Sign Out
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
