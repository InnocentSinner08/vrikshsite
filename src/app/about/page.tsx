"use client";
import { useState } from "react";
import Image from "next/image";

type TActiveSection =
  | "Our Story"
  | "Vision"
  | "Mission"
  | "Why Change Needed?"
  | "How We Work?"
  | "Why Trust Us?";

const Page = () => {
  const [activeSection, setActiveSection] =
    useState<TActiveSection>("Our Story");

  const sections = [
    "Our Story",
    "Vision",
    "Mission",
    "Why Change Needed?",
    "How We Work?",
    "Why Trust Us?",
  ];

  return (
    <main className="flex flex-col justify-center items-center p-4">
      <div className="relative w-[95%] h-[65vh]">
        <Image
          src="/hero.jpg"
          alt="hero"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="w-[95%] flex flex-wrap justify-evenly items-center gap-1 p-4 bg-[#D9D9D9] mt-4">
        {sections.map((section) => (
          <div
            key={section}
            className={`px-2 py-1 text-sm whitespace-nowrap cursor-pointer ${
              activeSection === section ? "font-semibold" : ""
            }`}
            onClick={() => setActiveSection(section as TActiveSection)}
          >
            {section}
          </div>
        ))}
      </div>
      {activeSection === "Our Story" && (
        <div className="h-[45vh] w-[95%] my-4 flex items-center justify-center p-4">
          Our Story component Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Beatae ipsa alias corrupti reprehenderit?
          Consequuntur ea voluptatibus hic mollitia ex atque vitae totam minus
          enim illo vel ducimus, iste provident amet?
        </div>
      )}
      {activeSection === "Vision" && (
        <div className="h-[45vh] w-[95%] my-4 flex items-center justify-center p-4">
          Vision Component Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti quaerat voluptatum ipsam nam nostrum culpa eaque
          pariatur laudantium molestiae consequuntur inventore eveniet ad
          voluptatem ipsum, eius totam ex ullam provident!
        </div>
      )}
      {activeSection === "Mission" && (
        <div className="h-[45vh] w-[95%] my-4 flex items-center justify-center p-4">
          Mission Component Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti quaerat voluptatum ipsam nam nostrum culpa eaque
          pariatur laudantium molestiae consequuntur inventore eveniet ad
          voluptatem ipsum, eius totam ex ullam provident!
        </div>
      )}
      {activeSection === "How We Work?" && (
        <div className="h-[45vh] w-[95%] my-4 flex items-center justify-center p-4">
          How We Work Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti quaerat voluptatum ipsam nam nostrum culpa eaque pariatur
          laudantium molestiae consequuntur inventore eveniet ad voluptatem
          ipsum, eius totam ex ullam provident!
        </div>
      )}
      {activeSection === "Why Change Needed?" && (
        <div className="h-[45vh] w-[95%] my-4 flex items-center justify-center p-4">
          Why Change Needed Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti quaerat voluptatum ipsam nam nostrum culpa eaque
          pariatur laudantium molestiae consequuntur inventore eveniet ad
          voluptatem ipsum, eius totam ex ullam provident!
        </div>
      )}
      {activeSection === "Why Trust Us?" && (
        <div className="h-[45vh] w-[95%] my-4 flex items-center justify-center p-4">
          Why Trust Us? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti quaerat voluptatum ipsam nam nostrum culpa eaque pariatur
          laudantium molestiae consequuntur inventore eveniet ad voluptatem
          ipsum, eius totam ex ullam provident!
        </div>
      )}
    </main>
  );
};

export default Page;
