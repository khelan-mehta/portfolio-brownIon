import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full  fixed top-0 h-[90px] flex justify-between px-[10vw] py-7">
      <div className="logo font-bold text-[24px] self-center  " >Brown Ion</div>
      <div className="flex gap-6 self-center"> 
        <Link href={"/"}>Home</Link>
        <Link href={"/works"}>Works</Link>
      </div>
    </div>
  );
};

export default Navbar;
