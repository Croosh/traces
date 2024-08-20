import AppointmentCreator from "@/components/sections/appointmentCreator";
import AppointmentsList from "@/components/sections/appointments-list";
import UpcomingAppointment from "@/components/sections/upcomingAppointment";
import { createClient } from "@/utils/supabase/server";

async function Page() {
  const supabase = createClient();
  const { data: appointments, error } = await supabase
    .from("appointments")
    .select("*")
    .order("date", { ascending: true });
  if (error) {
    console.log(error);

    return <div>Error loading records</div>;
  }
  return (
    <div className="  p-8 flex flex-col gap-3">
      <div className="flex w-full justify-between items-end">
        <h2 className="font-bold text-3xl">Appointments</h2>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full py-4 gap-4 ">
          <AppointmentCreator />
          <UpcomingAppointment
            appointments={[appointments[0], appointments[1]]}
          />
        </div>
        <div className="flex py-4">
          <AppointmentsList appointments={appointments} />
        </div>
      </div>
    </div>
  );
}

export default Page;
