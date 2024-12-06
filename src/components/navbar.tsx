"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-[10vh] flex px-3 justify-between items-center">
      <div className="h-[80%] aspect-[88/79] relative">
        <Image src="/vriksh-logo.png" alt="logo" fill={true}></Image>
      </div>
      <div className="flex gap-6 justify-center items-center">
        <Link href="/" className={pathname == "/" ? "nav-link text-sm" : "text-sm"}>
          Home
        </Link>
        <Link href="/about" className={pathname == "/about" ? "nav-link text-sm" : "text-sm"}>
          About Us
        </Link>
        <Link href="/team" className={pathname == "/team" ? "nav-link text-sm" : "text-sm"}>
          Our Team
        </Link>
        <Link href="/work" className={pathname == "/work" ? "nav-link text-sm" : "text-sm"}>
          Our Work
        </Link>
        <Link
          href="/partners"
          className={pathname == "/partners" ? "nav-link text-sm" : "text-sm"}
        >
          Our Partners
        </Link>
        <Link
          href="/contribute"
          className={pathname == "/contribute" ? "nav-link text-sm" : "text-sm"}
        >
          Get Involved
        </Link>
        <Link href="/media" className={pathname == "/media" ? "nav-link text-sm" : "text-sm"}>
          Media
        </Link>
        <Link
          href="/contact"
          className={pathname == "/contact" ? "nav-link text-sm" : "text-sm"}
        >
          Reach Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
