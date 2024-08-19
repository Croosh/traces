import { AddRecord } from "@/components/sections/addRecord";
import RecordTable from "@/components/sections/recordTable";
import { createClient } from "@/utils/supabase/server";

async function Page() {
  const supabase = createClient(); // Corrected the typo
  const { data: records, error } = await supabase
    .from("records")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching records:", error);
    return <div>Error loading records</div>;
  }

  console.log(records);

  return (
    <div className="  p-8 flex flex-col gap-3">
      <div className="flex w-full justify-between items-end">
        <h2 className="font-bold text-3xl">Records</h2>
        <div className="flex gap-2">
          <AddRecord />
        </div>
      </div>
      <RecordTable records={records} />
    </div>
  );
}

export default Page;
