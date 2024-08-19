"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Patients } from "@/types/types";
import { ReadPatientButton } from "./readPatient";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function PatientTable({ patients }: { patients?: Patients[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const options = {
    includeScore: false,
    keys: ["name"],
  };
  let filteredRecords: Patients[];
  const fuse = new Fuse(patients as Patients[], options);
  const result = fuse.search(searchTerm);
  if (searchTerm !== "") {
    filteredRecords = result.map((item) => {
      return item.item;
    });
  } else {
    filteredRecords = patients as Patients[];
  }
  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="">Patient Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRecords?.map((patient) => {
            return (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>
                  <ReadPatientButton patient={patient} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
