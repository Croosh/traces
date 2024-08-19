"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Record } from "@/types/types";
import { format } from "date-fns";
import { ReadRecordButton } from "./readRecord";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
export default function RecordTable({ records }: { records?: Record[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const options = {
    includeScore: false,
    keys: ["patient_name"],
  };
  let filteredRecords: Record[];
  const fuse = new Fuse(records as Record[], options);
  const result = fuse.search(searchTerm);
  if (searchTerm !== "") {
    filteredRecords = result.map((item) => {
      return item.item;
    });
  } else {
    filteredRecords = records as Record[];
  }
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Patient Name</TableHead>
              <TableHead>Diagnosis</TableHead>
              <TableHead>Checkup Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords?.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">
                    {row.patient_name}
                  </TableCell>
                  <TableCell>{row.diagnosis}</TableCell>
                  <TableCell>
                    {format(
                      new Date(row.checkup_date as string),
                      "MMMM do, yyyy"
                    )}
                  </TableCell>
                  <TableCell>
                    <ReadRecordButton record={row} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
