import PatientTable from "@/components/sections/patientsTable";
import { createClient } from "@/utils/supabase/server";
import { AddPatient } from "../../../components/sections/addPatient";

async function Page() {
  const supabase = createClient(); // Corrected the typo
  const { data: patients, error } = await supabase
    .from("patients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching patients:", error);
    return <div>Error loading records</div>;
  }

  return (
    <div className="  p-8 flex flex-col gap-3">
      <div className="flex w-full justify-between items-end">
        <h2 className="font-bold text-3xl">Patients</h2>
        <AddPatient />
      </div>
      <PatientTable patients={patients} />
    </div>
  );
}

export default Page;
