import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="full  py-5 px-6 flex justify-between select-none ">
      <h1 className=" text-[#7c3aed] font-bold text-xl">Traces</h1>
      <UserButton userProfileMode="modal" />
    </div>
  );
}

export default Header;
