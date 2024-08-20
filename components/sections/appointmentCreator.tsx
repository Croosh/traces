"use client";
import { addAppointment } from "@/app/dashboard/appointments/actions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormButton from "../ui/FormButton";
export default function AppointmentCreator() {
  return (
    <Card className="w-1/2 h-fit">
      <form action={addAppointment}>
        <CardHeader>
          <CardTitle>Create an Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="doctor_name">Doctor</Label>
              <Input name="doctor_name" placeholder="Dr. James Carter" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="patient_name">Patient Name</Label>
              <Input name="patient_name" placeholder="Olivia Parker" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Date</Label>
              <Input name="date" type="date" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="reason">Reason</Label>
              <Input name="reason" placeholder="Insulin Dosage Adjustment" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <FormButton />
        </CardFooter>
      </form>
    </Card>
  );
}
