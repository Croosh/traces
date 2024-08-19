"use client";
import Link from "next/link";
import { Calendar, ClipboardListIcon, UsersRound, Wrench } from "lucide-react";
import { usePathname } from "next/navigation";
function Sidebar() {
  const pathname = usePathname();
  const links = [
    {
      id: 1,
      link: "/dashboard/records",
      icon: <ClipboardListIcon width={20} />,
      name: "Records",
    },
    {
      id: 2,
      link: "/dashboard/appointments",
      icon: <Calendar width={20} />,
      name: "Appointments",
    },
    {
      id: 3,
      link: "/dashboard/patients",
      icon: <UsersRound width={20} />,
      name: "Patients",
    },
    {
      id: 4,
      link: "/dashboard/settings",
      icon: <Wrench width={20} />,
      name: "Settings",
    },
  ];
  return (
    <div className=" w-full py-8  h-screen   ">
      <div className="flex flex-col items-start gap-1">
        {links.map((link) => {
          const isActive = pathname === link.link;
          return (
            <Link key={link.id} href={link.link} className="w-full">
              <div
                className={`flex transition-all gap-2 hover:bg-stone-700/10 text-md py-2 px-3 justify-start rounded-lg items-center ${
                  isActive ? "bg-[#7c3aed]/20 " : ""
                }`}
              >
                {link.icon} {link.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
