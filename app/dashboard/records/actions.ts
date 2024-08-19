"use server";

import { createClient } from "@/utils/supabase/server";

export async function addRecord(formData: FormData) {
  const supabase = createClient();
  const patientName = formData.get("patientName") as string;
  const diagnosis = formData.get("diagnosis") as string;
  const perscriptions = formData.get("perscriptions") as string;
  const date = formData.get("date") as string;
  const notes = formData.get("date") as string;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }
  const { error } = await supabase.from("records").insert({
    checkup_date: date,
    user_id: user.id,
    notes: notes,
    patient_name: patientName,
    diagnosis: diagnosis,
    prescription: perscriptions,
  });
  if (error) {
    throw new Error("Error while writing the record");
  }
}
