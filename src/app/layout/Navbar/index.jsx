"use client";

import ContactButton from "@/app/components/contactButton";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { BsList, BsXLg } from "react-icons/bs";

const NavItem = ({ children, styles }) => {
  return (
    <li className={`transition-all  hover:scale-105 hover:font-black w-full text-xl lg:text-3xl ${styles}`}>
      {children}
    </li>
  );
};

const DropDownMenu = ({opened}) => {
  return (
      <ul className={`absolute top-full left-0 w-full transition-all duration-300 ${opened ? "translate-x-0" :  "opacity-0"} bg-white z-50 flex flex-col text-center justify-center font-semibold`}>
        <Link href="#servicios">
          <NavItem styles="border-b-2 py-4 hover:bg-gray-300">
            Servicios
          </NavItem>
        </Link>
        <Link href="#nosotros">
          <NavItem styles="border-b-2 py-4 hover:bg-gray-300">
          Nosotros
          </NavItem>
        </Link>
        <Link href="#precios">
          <NavItem styles="border-b-2 py-4 hover:bg-gray-300">
            Precios
          </NavItem>
        </Link>
        <NavItem styles="p-4 w-full">
          <ContactButton>Contáctanos</ContactButton>
        </NavItem>
      </ul>
  )
}

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");


  return (
    <nav className=" w-full min-w-[300px] border-b-2">
      <div className="flex w-full px-4 md:px-0 md:w-5/6 items-center justify-between mx-auto py-4 gap-4 ">
        {isDesktop ? (
          <>
            <Link href="/" className="w-[200px]">
              <h1 className="font-bold text-center tracking-[-0.125em] text-5xl lg:text-6xl">TW7D</h1>
            </Link>
            <ul className="flex flex-row  justify-between font-semibold gap-12 ">
              <NavItem>
                <Link href="#servicios">Servicios</Link>
              </NavItem>
              <NavItem>
                <Link href="#nosotros">Nosotros</Link>
              </NavItem>
              <NavItem>
                <Link href="#precios">Precios</Link>
              </NavItem>
            </ul>
            <div className="text-right w-[200px]">
              <ContactButton>Contáctanos</ContactButton>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <h1 className="font-bold tracking-[-0.125em] text-5xl">TW7D</h1>
            </Link>

            <div className="flex items-center gap-4 ">

              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                {console.log(isMenuToggled)}
                {!isMenuToggled ? 
                  <BsList className="text-5xl w-12 font-bold cursor-pointer text-accent active:brightness-125 hover:scale-105   hover:rounded-2xl " />
                : <BsXLg className="text-4xl w-12  font-bold cursor-pointer text-accent active:brightness-125 hover:scale-105   hover:rounded-2xl " />
                }
                </button>
                <DropDownMenu opened={isMenuToggled}/>
            </div>
            
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
