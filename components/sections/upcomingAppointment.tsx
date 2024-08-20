import { Appointments } from "@/types/types";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
export default function UpcomingAppointment({
  appointments,
}: {
  appointments: Appointments[];
}) {
  console.log(appointments);
  return (
    <>
      <div className="flex grow">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col w-full gap-2">
              {appointments.map((item) => {
                return (
                  <Card key={item.id}>
                    <CardContent className="mt-3">
                      <span className=" font-bold text-xl my-2">
                        {item.patient}
                      </span>
                      <div className="flex w-full justify-between">
                        <span className=" font-medium">Doctor</span>
                        <span>
                          <Badge>{item.name}</Badge>
                        </span>
                      </div>
                      <div className="flex w-full justify-between">
                        <span className=" font-medium">Date</span>
                        <span>
                          {format(
                            new Date(item.date as string),
                            "MMMM do, yyyy"
                          )}
                        </span>
                      </div>
                      <div className="flex flex-col w-full justify-between">
                        <span className=" font-bold mt-1">Reason:</span>
                        <p>{item.reason}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

//  {
//    format(new Date(appointment[0].date as string), "MMMM do, yyyy");
//  }
