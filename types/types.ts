import { Database } from "./supabase";

export type Record = Database["public"]["Tables"]["records"]["Row"];
