"use client";
import {
  CircleArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapPin } from "react-feather";

const Sitemap = () => {
  return (
    <div className="bg-black text-white flex p-4 mid:grid mid:grid-cols-2 gap-4 
  md:justify-evenly desktop:flex-row flex-col md:flex-wrap 
  items-center text-center sm:text-left">
      <div>
        <div className="text-[#F7E120]">
          <Link href="/about">About Us</Link>
        </div>
        <div className="text-xs">
          <Link href="/about#our-story" className="text-xs">Our Story</Link>
        </div>
        <div className="text-xs">
          <Link href="/about#vision-and-mission" className="text-xs">Vision and Mission</Link>
        </div>
        <div className="text-xs">
          <Link href="/about#why-change-needed" className="text-xs">Why Change Needed</Link>
        </div>
        <div className="text-xs">
          <Link href="/about#how-we-work" className="text-xs">How We Work</Link>
        </div>
        <div className="text-xs">
          <Link href="/about#why-trust-us" className="text-xs">Why Trust Us</Link>
        </div>
      </div>
      <div>
        <div className="text-[#F7E120]">
          <Link href="/ourwork">Our Work</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#vriksh-music-class" className="text-xs">Vriksh Music Class</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#vriksh-digital-class" className="text-xs">Vriksh Digtal Class</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#vriksh-sports-club" className="text-xs">Vriksh Sports Club</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#student-activity-centre" className="text-xs">Student Activity Centre</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#shankaracharya-math-library" className="text-xs">Shankaracharya Math Library</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#vriksh-digital-2.0" className="text-xs">Vriksh Digital Class 2.0</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#vriksh-public-library" className="text-xs">Vriksh Public Library</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#vriksh-student-federation" className="text-xs">Vriksh Student Federation</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#vriksh-pathshala" className="text-xs">Vriksh Pathshala</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourwork#vriksh-sanskarshala" className="text-xs">Vriksh Sanskarshala</Link>
        </div>

      </div>
      <div>
        <div className="text-[#F7E120]">
          <Link href="/ourteam">Our Team</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourteam#core-team">Core Team</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourteam#alumni-section">Alumni</Link>
        </div>
        <div className="text-xs">
          <Link href="/ourpartners">Our Partner</Link>
        </div>
      </div>
      <div>
        <div className="text-[#F7E120]">
        <Link href="/media">Media</Link>
        </div>
        <div className="text-xs">
        <Link href="/media/events">Past Events</Link>
        </div>
        <div className="text-xs">
        <Link href="/media">Press Release</Link>
        </div>
        <div className="text-xs">
        <Link href="/media">Blogs</Link>
        </div>
      </div>
      <div className="">
        <div className="text-[#F7E120]">CONTACT US:</div>
        <div className="text-xs">Mobile Number: +91-7761981651, +91-9135209266</div>
        <div className="text-xs">Email ID: info@vrikshbethechange.org</div>
        <div className="text-xs">
          Adress: Manpur Patwatoli Gaya,<br></br>Bihar, India, 823003
        </div>
        <div className="flex gap-3 mt-3">
          <Link href="https://www.instagram.com/vrikshbethechange">
            <Instagram size={20} className="text-white" />
          </Link>
          <Link href="https://www.facebook.com/vrikshbethechange/">
            <Facebook size={20} className="text-white" />
          </Link>
          <Link href="https://x.com/vrikshbdchange">
            <Twitter size={20} className="text-white" />
          </Link>
          <Link href="https://www.youtube.com/@vrikshbethechange8690/featured">
            <Youtube size={20} className="text-white" />
          </Link>
          <Link href="https://www.linkedin.com/company/vrikshbethechange/">
            <Linkedin size={20} className="text-white" />
          </Link>
          <Link
            href="https://maps.app.goo.gl/EiuAkkdriMxUyYpm7"
            target="_blank"
          >
            <MapPin size={20} className="text-white" />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-[#F7E120]">DONATE US</div>
        <div className="text-xs">Donate Us Via UPI</div>
        <div className="relative aspect-square w-[100px]">
          <Image
            src="/images/homepage/QR.png"
            alt="founder"
            fill={true}
            objectFit="cover"
          ></Image>
        </div>
      </div>
      <div
        className="fixed bottom-2 right-2 "
        onClick={() =>
          scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <CircleArrowUp color="#30BD19" size={30} />
      </div>
    </div>
  );
};

export default Sitemap;
