import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] relative">
      <Image src="/hero.jpg" alt="hero" fill objectFit="cover"></Image>
      <div className="absolute h-[20vh] bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center">
      &quot;In the classrooms of VRIKSH PATHSHALA, knowledge grows not only in
        minds but also in the fertile soil of student&apos;s hearts, sowing seeds of
        compassion and environmental consciousness.&quot;
      </div>
    </div>
  );
};

export default Hero;
