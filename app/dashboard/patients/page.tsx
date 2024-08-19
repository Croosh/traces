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

  console.log(patients);

  return (
    <div>
      <div className="flex w-full p-4 justify-between">
        <h2 className="font-bold text-xl">Patients</h2>
        <AddPatient />
      </div>
      <div className="flex flex-col gap-2"></div>
      <PatientTable patients={patients} />
    </div>
  );
}

export default Page;
