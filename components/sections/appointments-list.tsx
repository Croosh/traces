import { Appointments } from "@/types/types";
import { format } from "date-fns";
import {} from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export default async function AppointmentsList({
  appointments,
}: {
  appointments: Appointments[];
}) {
  return (
    <>
      <div className=" w-full pr-4 flex flex-col gap-2">
        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Patient Name</TableHead>
                  <TableHead className=" text-center">Date</TableHead>
                  <TableHead className=" text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        {item.patient}
                      </TableCell>
                      <TableCell className=" text-center">
                        <Badge>
                          {format(
                            new Date(item.date as string),
                            "MMMM do, yyyy"
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant={"outline"}>Read</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
