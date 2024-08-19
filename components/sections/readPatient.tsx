import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Patients } from "@/types/types";

export function ReadPatientButton({ patient }: { patient: Patients }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Read</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-1/2">
        <DialogHeader>
          <DialogTitle>{patient.name}</DialogTitle>
          <DialogDescription>{patient.email}</DialogDescription>
        </DialogHeader>
        <div className="flex w-full justify-between">
          <span className=" font-medium">Blood Group</span>
          <span>{patient.blood_group}</span>
        </div>
        <div className="flex w-full justify-between">
          <span className=" font-medium">Gender </span>
          <span>{patient.gender}</span>
        </div>
        <div className="flex w-full justify-between">
          <span className=" font-medium">Date of Birth</span>
          <span>{patient.dob}</span>
        </div>
        <span className=" font-bold text-xl mt-2">Contact</span>

        <div className="flex w-full justify-between">
          <span className=" font-medium">Email</span>
          <span>{patient.email}</span>
        </div>
        <div className="flex w-full justify-between">
          <span className=" font-medium">Phone No.</span>
          <span>{patient.phone_no}</span>
        </div>
        <div className="flex w-full justify-between">
          <span className=" font-medium">Address </span>
          <span>{patient.address}</span>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
