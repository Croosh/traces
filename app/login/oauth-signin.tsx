"use client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { oAuthSignIn } from "./actions";
import { Provider } from "@supabase/supabase-js";

type OAuthProvider = {
  name: Provider; // Changed from Provider to string
  displayName: string;
  icon?: JSX.Element;
};

export default function OAuthButton() {
  const oAuthProvider: OAuthProvider[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <Github width={18} />,
    },
  ];

  return (
    <>
      {oAuthProvider.map((provider) => (
        <Button
          key={provider.name} // Adding a key is important when rendering a list
          className="flex justify-center items-center gap-2 w-full"
          variant={"outline"}
          onClick={async () => await oAuthSignIn(provider.name)}
        >
          {provider.icon} {/* Using the icon property */}
          Login with {provider.displayName}
        </Button>
      ))}
    </>
  );
}
