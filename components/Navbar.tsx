'use client'
import Image from "next/image";
import React from "react";
import logo from "../public/logo2.png"
import Link from "next/link";
import {
  AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook
  , AiOutlineTwitter
} from "react-icons/ai";
import { FaHome, FaGlobe, FaFileAlt, FaCog, FaEnvelope } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="fixed w-full top-0 left-0 z-50 h-24 shadow-xl bg-base-200" >
      <div className="flex items-center  h-full w-full px-4 2xl:px-16">
        <div className="w-3/4 hidden sm:flex justify-center">
          <ul className="hidden sm:flex">

            <li className="ml-15! flex items-center! hover:border-b! text-center! text-xl! space-x-2!">

              <Link href="/contact">
                ارتباط با ما
              </Link>
              <FaEnvelope size={20} />
            </li>

            <li className="ml-15! flex items-center! hover:border-b! text-center! text-xl! space-x-2!">
              <Link href="/services">
                خدمات
              </Link>
              <FaCog size={20} />
            </li>
            <li className="ml-15! flex items-center! hover:border-b! text-center! text-xl! space-x-2!">
              <Link href="/topics">
                مقاله ها
              </Link>
              <FaFileAlt size={20} />
            </li>

            <li className="ml-15! flex items-center! hover:border-b! text-center! text-xl! space-x-2!">
              <Link href="/opportunities">
                فرصت ها
              </Link>
              <FaGlobe size={20} />
            </li>
            <li className="ml-15! flex items-center! hover:border-b! text-center! text-xl! space-x-2!">
              <Link href="/">
                خانه
              </Link>
              <FaHome size={20} color="red" />
            </li>
          </ul>
        </div>
        <div className="flex w-1/4 justify-start sm:justify-end ml-8!">
          <Link href="/">
            <Image
              alt="Logo"
              src={logo}
              about="this is our web Application website"
              width={205}
              height={75}
              className="justify-end cursor-pointer"
              priority
            />
          </Link>
        </div>



        {/* Mobail */}

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
            <li onClick={() => setMenuOpen(false)} className="flex items-center! my-5! hover:border-b! text-center! text-xl! space-x-2!">
              <FaHome size={20} />
              <Link href="/">
                خانه
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="flex items-center! mb-5! hover:border-b! text-center! text-xl! space-x-2!">
              <FaGlobe size={20} />
              <Link href="/opportunities">
                فرصت ها
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="flex items-center! mb-5! hover:border-b! text-center! text-xl! space-x-2!">
              <FaFileAlt size={20} />
              <Link href="/topics">
                مقاله ها
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="flex items-center! mb-5! hover:border-b! text-center! text-xl! space-x-2!">
              <FaEnvelope size={20} />
              <Link href="/contact">
                ارتباط با ما
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="flex items-center! mb-10! hover:border-b! text-center! text-xl! space-x-2!">
              <FaCog size={20} color="red" />
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

