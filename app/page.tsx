import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      Hello World
      <Link href={"/dashboard"}>
        <Button>Submit</Button>
      </Link>
    </div>
  );
}
