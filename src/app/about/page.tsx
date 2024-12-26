"use client";
import { useRef } from "react";
import Image from "next/image";

const Page = () => {
  // Create refs for each section
  const ourStoryRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const whyChangeNeededRef = useRef<HTMLDivElement>(null);
  const howWeWorkRef = useRef<HTMLDivElement>(null);
  const whyTrustUsRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex justify-evenly">
          <button
            className="text-gray-700 hover:text-black"
            onClick={() => handleScroll(ourStoryRef)}
          >
            Our Story
          </button>
          <button
            className="text-gray-700 hover:text-black"
            onClick={() => handleScroll(visionRef)}
          >
            Vision
          </button>
          <button
            className="text-gray-700 hover:text-black"
            onClick={() => handleScroll(missionRef)}
          >
            Mission
          </button>
          <button
            className="text-gray-700 hover:text-black"
            onClick={() => handleScroll(whyChangeNeededRef)}
          >
            Why Change Needed?
          </button>
          <button
            className="text-gray-700 hover:text-black"
            onClick={() => handleScroll(howWeWorkRef)}
          >
            How We Work?
          </button>
          <button
            className="text-gray-700 hover:text-black"
            onClick={() => handleScroll(whyTrustUsRef)}
          >
            Why Trust Us?
          </button>
        </div>
      </div>

      {/* Section Contents */}
      <section ref={ourStoryRef} className="w-full h-[100vh] bg-white p-8">
        <h2 className="text-2xl font-bold text-center">Our Story</h2>
        <p className="mt-4 text-center">
          Our Story component content goes here...
        </p>
      </section>

      <section ref={visionRef} className="w-full h-[100vh] bg-gray-100 p-8">
        <h2 className="text-2xl font-bold text-center">Vision</h2>
        <p className="mt-4 text-center">
          Vision component content goes here...
        </p>
      </section>

      <section ref={missionRef} className="w-full h-[100vh] bg-white p-8">
        <h2 className="text-2xl font-bold text-center">Mission</h2>
        <p className="mt-4 text-center">
          Mission component content goes here...
        </p>
      </section>

      <section ref={whyChangeNeededRef} className="w-full h-[100vh] bg-gray-100 p-8">
        <h2 className="text-2xl font-bold text-center">Why Change Needed?</h2>
        <p className="mt-4 text-center">
          Why Change Needed content goes here...
        </p>
      </section>

      <section ref={howWeWorkRef} className="w-full h-[100vh] bg-white p-8">
        <h2 className="text-2xl font-bold text-center">How We Work?</h2>
        <p className="mt-4 text-center">
          How We Work content goes here...
        </p>
      </section>

      <section ref={whyTrustUsRef} className="w-full h-[100vh] bg-gray-100 p-8">
        <h2 className="text-2xl font-bold text-center">Why Trust Us?</h2>
        <p className="mt-4 text-center">
          Why Trust Us content goes here...
        </p>
      </section>
    </main>
  );
};

export default Page;
