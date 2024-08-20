import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import OAuthButton from "./oauth-signin";

export default async function LoginPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    return redirect("/dashboard");
  }
  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-[#7c3aed]/20 to-yellow-100 relative">
      <svg
        className=" animate-spin-slow absolute top-12 left-12"
        xmlns="http://www.w3.org/2000/svg"
        width="84"
        height="84"
        viewBox="0 0 24 24"
        style={{ fill: "#7c3aed" }}
        // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
      >
        <path d="M2.047 14.667a.992.992 0 0 0 .466.607l1.909 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.002 1.002 0 0 0 1.366.366L12 20.75l1.91 1.104a1.002 1.002 0 0 0 1.366-.366l1.103-1.909h2.199a1 1 0 0 0 1-1V16.38l1.909-1.104a.999.999 0 0 0 .366-1.366L20.75 12l1.104-1.909a1 1 0 0 0-.366-1.366l-1.909-1.104V5.422a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.004 1.004 0 0 0-.607-.466.994.994 0 0 0-.759.1L12 3.25l-1.909-1.104a.998.998 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62L2.513 8.725a1.001 1.001 0 0 0-.365 1.366L3.251 12l-1.104 1.909a1.003 1.003 0 0 0-.1.758z"></path>
      </svg>{" "}
      <Card className=" w-1/3  p-4 m-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account.</CardDescription>
        </CardHeader>
        <CardContent className=" flex flex-col gap-2">
          <OAuthButton />
          {/* <span className=" text-center">or</span> */}
          {/* <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@company.com"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password:</Label>
                <Input id="email" name="email" type="password" required />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Button formAction={login}>Log in</Button>
                <Button formAction={signup} variant={"outline"}>
                  Sign up
                </Button>
              </div>
            </div>
          </form> */}
        </CardContent>
      </Card>
    </div>
  );
}
