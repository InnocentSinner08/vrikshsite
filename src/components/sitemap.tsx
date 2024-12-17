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

const Sitemap = () => {
  return (
    <div className="bg-black text-white flex p-4  mid:grid mid:grid-cols-2 gap-4 md:justify-evenly desktop:flex-row flex-col md:flex-wrap">
      <div>
        <div className="text-[#F7E120]">ABOUT US</div>
        <div className="text-xs">Who We Are</div>
        <div className="text-xs">Our Story</div>
        <div className="text-xs">Our Strategy</div>
        <div className="text-xs">Our Vision</div>
        <div className="text-xs">Our Mission</div>
      </div>
      <div>
        <div className="text-[#F7E120]">OUR WORK</div>
        <div className="text-xs">Achievements</div>
        <div className="text-xs">Vriksh Music Class</div>
        <div className="text-xs">Vriksh Sankarshala</div>
        <div className="text-xs">Vriksh Digital Class</div>
        <div className="text-xs">Vriksh Sports Club</div>
        <div className="text-xs">Student Activity Center</div>
        <div className="text-xs">Sankaracharya Math Library</div>
        <div className="text-xs">Vriksh Digital Class 2.0</div>
        <div className="text-xs">Vriksh Public Library</div>
        <div className="text-xs">Vriksh Student Federation</div>
        <div className="text-xs">Vriksh Pathshala</div>
      </div>
      <div>
        <div className="text-[#F7E120]">OUR TEAM</div>
        <div className="text-xs">Board Members</div>
        <div className="text-xs">Trustee</div>
        <div className="text-xs">Alumni</div>
        <div className="text-xs">Our Partners</div>
      </div>
      <div>
        <div className="text-[#F7E120]">MEDIA</div>
        <div className="text-xs">Events</div>
        <div className="text-xs">Press Releases</div>
        <div className="text-xs">Gallery</div>
        <div className="text-xs">Testimonials</div>
        <div className="text-xs">Blogs</div>
        <div className="text-xs">FAQs</div>
      </div>
      <div className="">
        <div className="text-[#F7E120]">CONTACT US:</div>
        <div className="text-xs">Mobile Number: +91-7761981651</div>
        <div className="text-xs">Phone Number: +91-9135209266</div>
        <div className="text-xs">Email ID: info@vrikshbethechange.com</div>
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
        </div>
      </div>
      <div>
        <div className="text-[#F7E120]">DONATE US</div>
        <div className="text-xs">Donate Us Via UPI</div>
        <div className="relative aspect-square w-[100px]">
          <Image
            src="/founder.jpeg"
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
        <CircleArrowUp color="#30BD19" size={30}/>
      </div>
    </div>
  );
};

export default Sitemap;
