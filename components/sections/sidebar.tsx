import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar, ClipboardListIcon, Wrench } from "lucide-react";
function Sidebar() {
  return (
    <div className=" w-1/4 py-8 px-6  h-screen   ">
      <div className="flex flex-col items-start">
        <Link href={"/dashboard/records"}>
          <Button variant={"ghost"} className=" flex gap-2 grow" size={"lg"}>
            <ClipboardListIcon width={18} /> Records
          </Button>
        </Link>
        <Link href={"/dashboard/appointments"}>
          <Button variant={"ghost"} className=" flex gap-2 grow" size={"lg"}>
            <Calendar width={18} />
            Appointments
          </Button>
        </Link>
        <Link href={"/dashboard/settings"}>
          <Button variant={"ghost"} className=" flex gap-2 grow" size={"lg"}>
            <Wrench width={20} />
            Settings
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
