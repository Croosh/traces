import { Button } from "@/components/ui/button";
import { Layers3, Shield, Sparkles, ToyBrick } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br  from-[#7c3aed]/20 to-yellow-100">
      <div className="h-screen  flex flex-col p-8 justify-center items-center">
        <div className="flex justify-center items-center gap-2 group cursor-pointer absolute select-none  top-12 bg-primary/30 px-4 py-2 rounded-full">
          <svg
            className=" group-hover:animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            style={{ fill: "rgb(0 0 0 / 0.6)" }}
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path d="M2.047 14.667a.992.992 0 0 0 .466.607l1.909 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.002 1.002 0 0 0 1.366.366L12 20.75l1.91 1.104a1.002 1.002 0 0 0 1.366-.366l1.103-1.909h2.199a1 1 0 0 0 1-1V16.38l1.909-1.104a.999.999 0 0 0 .366-1.366L20.75 12l1.104-1.909a1 1 0 0 0-.366-1.366l-1.909-1.104V5.422a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.004 1.004 0 0 0-.607-.466.994.994 0 0 0-.759.1L12 3.25l-1.909-1.104a.998.998 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62L2.513 8.725a1.001 1.001 0 0 0-.365 1.366L3.251 12l-1.104 1.909a1.003 1.003 0 0 0-.1.758z"></path>
          </svg>
          <h1 className=" text-black/60 font-normal text-3xl">traces. </h1>
        </div>
        <div className="flex justify-center items-center w-1/2 gap-8 flex-col">
          <span className=" text-7xl font-regular text-center text-primary">
            Minimal EMR for Small Medics.
          </span>
          <Link href={"/dashboard"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
      <div className="flex w-full pt-2 gap-4 flex-col">
        <span className=" text-3xl font-medium text-center w-full my-2">
          Features
        </span>
        <div className="flex w-full">
          <div className="flex bg-primary/55 w-1/3 h-72 flex-col p-8  gap-2 relative">
            <span className=" font-bold text-4xl">Minimal</span>
            <p className=" text-lg">Clean and easy to use UI</p>
            <Sparkles
              className=" absolute bottom-12 right-12"
              strokeWidth={"1px"}
              width={96}
              height={96}
            />
          </div>
          <div className="flex bg-primary/35 w-1/3 h-72 flex-col p-8  gap-2 relative">
            <span className=" font-bold text-4xl">3-in-1</span>
            <p className=" text-lg">
              Manage medical records, patients and appointments
            </p>
            <Layers3
              strokeWidth={"1px"}
              className=" absolute bottom-12 right-12"
              width={96}
              height={96}
            />
          </div>
          <div className="flex bg-primary/45 w-1/3 h-72 flex-col p-8  gap-2 relative">
            <span className=" font-bold text-4xl">Secure</span>
            <p className=" text-lg">Completely secure and protected.</p>
            <Shield
              className=" absolute bottom-12 right-12"
              strokeWidth={"1px"}
              width={96}
              height={96}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
