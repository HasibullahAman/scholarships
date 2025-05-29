'use client'
import Image from "next/image";
import React from "react";
import logo from "../public/logo.png"
import Link from "next/link";
import {
  AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook
  , AiOutlineTwitter
} from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-base-200" >
      <div className="flex items-center h-full w-full px-4 2xl:px-16">
        <div className="w-1/4">
          <Link href="/">
            <Image
              alt="Logo"
              src={logo}
              about="this is our web Application website"
              width={205}
              height={75}
              className="justify-start cursor-pointer"
              priority
            />
          </Link>
        </div>
        <div className="w-3/4 hidden sm:flex justify-center">
          <ul className="hidden sm:flex">
            <li className="ml-20! lowercase lg:uppercase hover:border-b text-xl">
              <Link href="/">
                خانه
              </Link>
            </li>
            <li className="ml-20! uppercase hover:border-b text-xl">
              <Link href="/contact">
                مقاله ها
              </Link>
            </li>
            <li className="ml-20! uppercase hover:border-b text-xl">
              <Link href="/services">
                فرصت ها
              </Link>
            </li>
            <li className="ml-20! lowercase lg:uppercase hover:border-b text-xl">
              <Link href="/">
                خدمات
              </Link>
            </li>
            <li className="ml-20! last:mr-20! uppercase hover:border-b text-xl">
              <Link href="/services">
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleNav} className="md:hidden cursor-pointer ml-auto! p-3! ">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end py-[10%]! pr-[10%]!">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex flex-col py-4! items-center! justify-center">
          <ul>
            <li onClick={() => setMenuOpen(false)} className="py-4! cursor-pointer">
              <Link href="/">
                مینوی اصلی
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4! cursor-pointer">
              <Link href="/about">
                درباره ما
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4! cursor-pointer">
              <Link href="/contact">
                ارتباط با ما
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4! cursor-pointer">
              <Link href="/services">
                خدمات
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row pt-10 items-center! justify-center">
          <AiOutlineInstagram size={30} className="mx-5! cursor-pointer" />
          <AiOutlineFacebook size={30} className="mx-5! cursor-pointer" />
          <AiOutlineTwitter size={30} className="mx-5! cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

