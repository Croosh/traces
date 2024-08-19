import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Patients } from "@/types/types";
import { Button } from "../ui/button";
import { ReadPatientButton } from "./readPatient";

export default function PatientTable({ patients }: { patients?: Patients[] }) {
  return (
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
        {patients?.map((patient) => {
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
  );
}
