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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import { AddPatientAction } from "@/app/dashboard/patients/actions";
export function AddPatient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus width={16} />
          Add Patient
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3/4">
        <form
          ref={formRef}
          action={async (d) => {
            setLoading(true);
            await AddPatientAction(d);
            formRef.current?.reset();
            setLoading(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>Add Patient</DialogTitle>
            <DialogDescription>Add patient record</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="patientName" className="text-right">
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
              <Label htmlFor="dob" className="text-right">
                Date of Birth
              </Label>
              <Input
                type="date"
                name="dob"
                id="diagnosis"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="checkupDate" className="text-right">
                Gender
              </Label>
              <div className="col-span-3" id="gender">
                <Select name="gender">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="phone_no" className="text-right my-2">
                Phone no.
              </Label>
              <Input
                className="col-span-3 max-w-full"
                name="phone_no"
                placeholder="+123 456 789"
                id="prescriptions"
                type="text"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="email" className="text-right my-2">
                Email
              </Label>
              <Input
                className="col-span-3 max-w-full"
                name="email"
                placeholder="emilydavis@mail.com"
                id="email"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="blood_group" className="text-right my-2">
                Blood Group
              </Label>
              <Input
                className="col-span-3 max-w-full"
                name="blood_group"
                placeholder="AB+"
                id="blood_group"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="address" className="text-right my-2">
                Address
              </Label>
              <Input
                className="col-span-3 max-w-full"
                name="address"
                placeholder="8360 Old York Rd, Elkins Park, PY"
                id="address"
              />
            </div>
          </div>
          <DialogFooter>
            {/* {loading ? (
              <Button disabled>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit">Save changes</Button>
            )} */}
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
