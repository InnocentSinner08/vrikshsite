"use client";
import { useRef } from "react";
import Image from "next/image";

const Page = () => {
  const NAVBAR_OFFSET = 60;

  const ourStoryRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const whyChangeNeededRef = useRef<HTMLDivElement>(null);
  const howWeWorkRef = useRef<HTMLDivElement>(null);
  const whyTrustUsRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_OFFSET;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        <Image
          src="/images/aboutus/homepage-1.jpg"
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
      <section
        ref={ourStoryRef}
        className="w-full min-h-[50vh] bg-white p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Our Story</h2>
        <p className="mt-4 text-center max-w-4xl">
          Patwatoli, a locality in the Gaya district of Bihar, is remarkable for
          two things: its skilled weavers and its consistent production of
          IITians. Known as the &quot;Village of IITians,&quot; Patwatoli sees about
          15-20 of its students clear the highly competitive JEE Advanced
          examination every year. This unique achievement is even more
          impressive considering the challenges faced by the local community.
          The residents of Patwatoli are primarily hardworking weavers and
          daily-wage workers. Despite financial challenges, the village has
          built a legacy of producing IITians, serving as an inspiring example
          of determination and perseverance.
          <br />
          <br />
          We, VRIKSH BE THE CHANGE, started our journey in 2013, founded by
          Chandrakant Pateshwari along with some of his fellows in Manpur
          Patwatoli, Gaya. An ordinary person driven by an extraordinary dream,
          Chandrakant Pateshwari (CP) created VRIKSH BE THE CHANGE to ensure no
          rural Indian is deprived of rights as basic as survival,
          participation, protection, and development.
        </p>
      </section>

      <section
        ref={visionRef}
        className="w-full bg-gray-100 p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Vision</h2>
        <p className="mt-4 text-center max-w-4xl">
          Vision component content goes here...
        </p>
      </section>

      <section
        ref={missionRef}
        className="w-full bg-white p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Mission</h2>
        <p className="mt-4 text-center max-w-4xl">
          Mission component content goes here...
        </p>
      </section>

      <section
        ref={whyChangeNeededRef}
        className="w-full bg-gray-100 p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Why Change Needed?</h2>
        <p className="mt-4 text-center max-w-4xl">
          Why Change Needed content goes here...
        </p>
      </section>

      <section
        ref={howWeWorkRef}
        className="w-full bg-white p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">How We Work?</h2>
        <p className="mt-4 text-center max-w-4xl">
          How We Work content goes here...
        </p>
      </section>

      <section
        ref={whyTrustUsRef}
        className="w-full bg-gray-100 p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Why Trust Us?</h2>
        <p className="mt-4 text-center max-w-4xl">
          Why Trust Us content goes here...
        </p>
      </section>
    </main>
  );
};

export default Page;
