async function Header() {
  return (
    <div className="w-full  flex  select-none ">
      <div className="flex justify-center items-center gap-2 group cursor-pointer">
        <svg
          className=" group-hover:animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style={{ fill: "#7c3aed" }}
          // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
          <path d="M2.047 14.667a.992.992 0 0 0 .466.607l1.909 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.002 1.002 0 0 0 1.366.366L12 20.75l1.91 1.104a1.002 1.002 0 0 0 1.366-.366l1.103-1.909h2.199a1 1 0 0 0 1-1V16.38l1.909-1.104a.999.999 0 0 0 .366-1.366L20.75 12l1.104-1.909a1 1 0 0 0-.366-1.366l-1.909-1.104V5.422a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.004 1.004 0 0 0-.607-.466.994.994 0 0 0-.759.1L12 3.25l-1.909-1.104a.998.998 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62L2.513 8.725a1.001 1.001 0 0 0-.365 1.366L3.251 12l-1.104 1.909a1.003 1.003 0 0 0-.1.758z"></path>
        </svg>
        <h1 className=" text-[#7c3aed] font-normal text-3xl">traces. </h1>
      </div>
    </div>
  );
}

export default Header;
