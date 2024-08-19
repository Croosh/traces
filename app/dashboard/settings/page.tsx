import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";
async function Page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div>
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
