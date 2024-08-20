"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { getURL } from "@/utils/helper";
import { Provider } from "@supabase/supabase-js";

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return redirect("/login?message=Error Loging In");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function oAuthSignIn(provider: Provider) {
  if (!provider) {
    return redirect("/login?message=No provider selected");
  }
  const supabase = createClient();
  const redirectUrl = getURL("/auth/callback");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: redirectUrl,
    },
  });
  if (error) {
    return redirect("/login?message=User could not be authenticated");
  }
  revalidatePath("/dashboard", "layout");
  return redirect(data.url);
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/");
}
