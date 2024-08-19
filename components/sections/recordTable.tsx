import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Record } from "@/types/types";
import { format } from "date-fns";

export default function RecordTable({ records }: { records?: Record[] }) {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="">Patient Name</TableHead>
          <TableHead>Diagnosis</TableHead>
          <TableHead>Checkup Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records?.map((row) => {
          return (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.patient_name}</TableCell>
              <TableCell>{row.diagnosis}</TableCell>
              <TableCell>
                {format(new Date(row.checkup_date as string), "MMMM do, yyyy")}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
