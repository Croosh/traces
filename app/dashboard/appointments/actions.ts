"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addAppointment(formData: FormData) {
  const supabase = createClient();
  const doctor_name = formData.get("doctor_name") as string;
  const patient_name = formData.get("patient_name") as string;
  const date = formData.get("date") as string;
  const reason = formData.get("reason") as string;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }
  const { error } = await supabase.from("appointments").insert({
    name: doctor_name,
    patient: patient_name,
    reason: reason,
    user_id: user.id,
    date: date,
  });
  if (error) {
    throw new Error("Error Creating the appointment");
  }
  revalidatePath("/dashboard/appointments");
}
