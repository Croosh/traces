import { Database } from "./supabase";

export type Record = Database["public"]["Tables"]["records"]["Row"];
export type Patients = Database["public"]["Tables"]["patients"]["Row"];
