"use client";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        disabled={pending}
        type="submit"
        className=" flex gap-2 justify-center items-center"
      >
        {pending ? <Loader2 width={18} className=" animate-spin" /> : null}
        {pending ? "Creating" : "Create"}
      </Button>
    </>
  );
}
