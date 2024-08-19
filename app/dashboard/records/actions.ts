"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addRecord(formData: FormData) {
  const supabase = createClient();
  const patientName = formData.get("patientName") as string;
  const diagnosis = formData.get("diagnosis") as string;
  const prescription = formData.get("prescription") as string;
  const date = formData.get("date") as string;
  const notes = formData.get("notes") as string;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }
  // const { error } = await supabase.from("records").insert({
  //   checkup_date: date,
  //   user_id: user.id,
  //   notes: notes,
  //   patient_name: patientName,
  //   diagnosis: diagnosis,
  //   prescription: perscriptions,
  // });
  const { error } = await supabase.from("records").insert({
    user_id: user.id,
    patient_name: patientName,
    prescriptions: prescription,
    checkup_date: date,
    notes: notes,
    diagnosis: diagnosis,
  });
  if (error) {
    throw new Error("Error while writing the record: " + error);
  }
  revalidatePath("/dashboard/records");
}
