"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function AddPatientAction(formData: FormData) {
  const supabase = createClient();
  console.log("Hello from AddPatientAction");
  const patient_name = formData.get("patientName") as string;
  const dob = formData.get("dob") as string;
  const gender = formData.get("gender") as string;
  const phone_no = formData.get("phone_no") as string;
  const email = formData.get("email") as string;
  const blood_group = formData.get("blood_group") as string;
  const address = formData.get("address") as string;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("patients").insert({
    user_id: user.id,
    name: patient_name,
    address: address,
    blood_group: blood_group,
    dob: dob,
    email: email,
    gender: gender,
    phone_no: phone_no,
  });
  if (error) {
    throw new Error("Error while creating Patient: " + error);
  }
  revalidatePath("/dashboard/patients");
}
