"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { addRecord } from "@/app/dashboard/records/actions";

export function AddRecord() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus width={16} />
          Add Record
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-1/4 md:w-2/4">
        <form action={addRecord}>
          <DialogHeader>
            <DialogTitle>Add Record</DialogTitle>
            <DialogDescription>Add patient record</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Patient Name
              </Label>
              <Input
                name="patientName"
                placeholder="Emily Davis"
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="diagnosis" className="text-right">
                Diagnosis
              </Label>
              <Input
                type="text"
                name="diagnosis"
                placeholder="Asthma"
                id="diagnosis"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="checkupDate" className="text-right">
                Checkup Date
              </Label>
              <div className="col-span-3">
                <Input
                  type="date"
                  name="date"
                  placeholder="Asthma"
                  id="diagnosis"
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="prescriptions" className="text-right my-2">
                Prescriptions
              </Label>
              <Input
                className="col-span-3 max-w-full"
                name="prescriptions"
                placeholder="Inhaler prescription renewed, avoid allergens."
                id="prescriptions"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="notes" className="text-right my-2">
                Notes
              </Label>
              <Input
                className="col-span-3 max-w-full"
                name="notes"
                placeholder="Inhaler prescription renewed, avoid allergens."
                id="notes"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
