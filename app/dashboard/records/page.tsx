import { AddRecord } from "@/components/sections/addRecord";
import RecordTable from "@/components/sections/recordTable";
import { createClient } from "@/utils/supabase/server";

async function Page() {
  const supabase = createClient(); // Corrected the typo
  const { data: records, error } = await supabase.from("records").select("*");

  if (error) {
    console.error("Error fetching records:", error);
    return <div>Error loading records</div>;
  }

  console.log(records);

  return (
    <div>
      <div className="flex w-full p-4 justify-between">
        <h2 className="font-bold text-xl">Records</h2>
        <AddRecord />
      </div>
      <div className="flex flex-col gap-2"></div>
      <RecordTable records={records} />
    </div>
  );
}

export default Page;
