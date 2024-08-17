import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div>
      <div className="flex w-full p-4 justify-between">
        <h2 className=" font-bold text-xl">Records</h2>
        <Button>Add Record</Button>
      </div>
    </div>
  );
}

export default Page;
