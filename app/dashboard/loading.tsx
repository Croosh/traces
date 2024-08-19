import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-full w-full justify-center items-start py-32 gap-2">
      <span className=" font-medium text-xl">Loading</span>
      <Loader className=" animate-spin" />
    </div>
  );
}
