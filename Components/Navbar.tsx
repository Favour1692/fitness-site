"use client";

import { navdata } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 w-full py-4 z-1000">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-lg md:text-xl">ifitness logo</div>
        <div className="hidden md:flex gap-12">
          <div className="flex gap-4 text-lg">
            {navdata.map((data) => (
              <Link key={data.id} href={data.href}>
                {data.title}
              </Link>
            ))}
          </div>
          <div>
            <Link href="/contact">
              <button>join us</button>
            </Link>
          </div>
        </div>
        <div className="md:hidden text-xl z-100" onClick={handleClick}>
          {open ? <IoClose /> : <TiThMenu />}
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed left-0 top-0 w-[75%] h-full sm:w-full sm:h-auto sm:rounded-bl-xl sm:rounded-br-xl bg-blue-100">
          <div className="flex flex-col gap-6 text-lg py-12 sm:pt-12 sm:pb-16 px-8 sm:px-12">
            {navdata.map((data) => (
              <Link key={data.id} href={data.href}>
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
