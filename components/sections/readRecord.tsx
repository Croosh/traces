import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Record } from "@/types/types";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
export function ReadRecordButton({ record }: { record: Record }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Read</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-1/2">
        <DialogHeader>
          <DialogTitle className="text-2xl">{record.patient_name}</DialogTitle>
        </DialogHeader>
        <div className="flex w-full justify-between">
          <span className=" font-medium">Checkup Date</span>
          <span>
            {format(new Date(record.checkup_date as string), "MMMM do, yyyy")}
          </span>
        </div>
        <div className="flex w-full justify-between">
          <span className=" font-medium">Diagnosis </span>
          <Badge variant="default">{record.diagnosis}</Badge>
        </div>
        <div className="flex w-full justify-between flex-col my-2">
          <span className=" font-bold">Prescriptions:</span>
          <span>{record.prescriptions}</span>
        </div>
        <div className="flex w-full justify-between flex-col">
          <span className=" font-bold">Notes</span>
          <span>{record.notes ? record.notes : "No Additional Notes"}</span>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
