import { Input } from "@/components/ui/input";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-pink-200 to-lime-200">
      <Card className=" w-1/3  p-4 m-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account.</CardDescription>
        </CardHeader>
        <CardContent className=" flex flex-col gap-2">
          <OAuthButton />
          <span className=" text-center">or</span>
          <form>
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
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
