"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/work", label: "Our Work" },
    { href: "/ourpartners", label: "Our Partners" },
    { href: "/getinvolved", label: "Get Involved" },
    { href: "/media", label: "Media" },
    { href: "/reachus", label: "Reach Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative w-full bg-white text-black z-50">
      <div className="w-full h-[10vh] flex px-3 justify-between items-center">
        <div className="h-[80%] aspect-[88/79] relative">
          <Image
            src="/images/homepage/vriksh-logo.png"
            alt="logo"
            fill={true}
          />
        </div>
        <div className="hidden md:flex gap-6 justify-center items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? "nav-link text-sm" : "text-sm"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "nav-link" : ""
                } text-sm block`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
