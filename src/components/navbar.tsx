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
      <div className="flex gap-10 justify-center items-center">
        <Link href="/" className={pathname == "/" ? "nav-link" : ""}>
          Home
        </Link>
        <Link href="/about" className={pathname == "/about" ? "nav-link" : ""}>
          About Us
        </Link>
        <Link href="/team" className={pathname == "/team" ? "nav-link" : ""}>
          Our Team
        </Link>
        <Link href="/work" className={pathname == "/work" ? "nav-link" : ""}>
          Our Work
        </Link>
        <Link
          href="/partners"
          className={pathname == "/partners" ? "nav-link" : ""}
        >
          Our Partners
        </Link>
        <Link
          href="/contribute"
          className={pathname == "/contribute" ? "nav-link" : ""}
        >
          Get Involved
        </Link>
        <Link href="/media" className={pathname == "/media" ? "nav-link" : ""}>
          Media
        </Link>
        <Link
          href="/contact"
          className={pathname == "/contact" ? "nav-link" : ""}
        >
          Reach Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
