"use client";

import { navdata } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Mode from "./Mode";
import { Button } from "@/components/ui/button";
import { pacifico } from "@/fonts";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 w-full h-auto py-6 z-1000">
      <div className="w-[90%] md:w-[80%] mx-auto px-4 flex justify-between items-center">
        <div className={`${pacifico.className} antialiased text-lg lg:text-xl text-crimson font-medium`}>ifitness gym</div>
        <div className="hidden md:flex gap-12 items-center">
          <div className="flex gap-4 text-lg items-center">
            {navdata.map((data) => (
              <Link key={data.id} href={data.href} className="text-lg lg:text-xl text-charcoal dark:text-creamy hover:text-crimson dark:hover:text-crimson transition-all duration-500 font-medium">
                {data.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/contact">
              <Button variant="outline" className="bg-crimson hover:bg-white transition-all duration-500 dark:bg-crimson">
                JOIN US
              </Button>
            </Link>
            <Mode />
          </div>
        </div>
        <div className="md:hidden flex gap-4 items-center">
          <Mode />
          <div className="text-xl z-100" onClick={handleClick}>
            {open ? <IoClose className="text-lg text-crimson sm:text-black font-semibold" /> : <TiThMenu className="text-lg text-crimson font-semibold" />}
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed left-0 top-0 w-[80%] h-full sm:w-full sm:h-auto sm:rounded-bl-xl sm:rounded-br-xl bg-creamy">
          <div className="flex flex-col gap-6 text-lg py-12 sm:pt-12 sm:pb-16 px-8 sm:px-12">
            {navdata.map((data) => (
              <Link key={data.id} href={data.href} className="text-lg text-crimson hover:text-burnt transition-all duration-500">
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
