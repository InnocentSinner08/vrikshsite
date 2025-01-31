"use client";
import { useRef } from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const Page = () => {
  const NAVBAR_OFFSET = 60;
  const ourStoryRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const whyChangeNeededRef = useRef<HTMLDivElement>(null);
  const howWeWorkRef = useRef<HTMLDivElement>(null);
  const whyTrustUsRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - NAVBAR_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[86vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center">
          <span className= {`relative z-{51} text-white text-6xl font-bold uppercase ${bebas.className}`}>Together for Endless Smiles</span>
        </div>

        <Image
          src="/images/aboutus/aboutimg.jpg"
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
            Vision and Mission
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
        <p className="mt-4 max-w-4xl text-justify">
          Patwatoli: A Symbol of Perseverance and Progress<br/>
          Patwatoli, a village in Gaya, Bihar, is renowned for its skilled weavers and its extraordinary success in producing 15-20 IITians annually. Despite financial hardships, the community’s unwavering dedication to education has created an inspiring legacy.
          <br />
          <br />
          Founded in 2013 by Chandrakant Pateshwari (CP) and like-minded individuals, VRIKSH BE THE CHANGE emerged from Patwatoli to uplift underprivileged students. Motivated by a friend’s struggle to continue school, CP turned a simple belief—“What I can do, I must do”—into a movement.
          Registered as a Trust in 2017, VRIKSH operates in Education, Healthcare, Community Development, and Environment, striving for a future where every child has access to learning and opportunity. Inspired by Patwatoli’s resilience, we continue to drive change, ensuring no one is left behind.
        </p>
      </section>

      <section
        ref={visionRef}
        className="w-full min-h-[50vh] bg-gray-100 p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Vision</h2>
        <p className="mt-4 max-w-4xl text-justify">
        </p>
        <ol className="list-decimal ">
          <li className="mt-4 ">
            <h3 className="mt-3 text-1xl font-bold  ">
            Creating an Educated and Empowered Generation
            </h3>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 text-1xl font-bold  ">
            Promoting Gender Equality
            </h3>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 text-1xl font-bold  ">
            Fostering Inclusivity and Dignity
            </h3>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 text-1xl font-bold  ">
            Nurturing Inspired and Socially Responsible Youth
            </h3>
          </li>
        </ol>
      </section>
      <section
        ref={whyChangeNeededRef}
        className="w-full min-h-[50vh] bg-white p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Why Change Needed?</h2>
        <p className="mt-4 text-justify max-w-4xl">
        Vriksh Be The Change: Our Commitment to Transforming Patwatoli<br/>
        At Vriksh Be The Change, we believe that transformation in Patwatoli is not just necessary—it is essential.
        </p>
        <ol className="list-decimal max-w-4xl">
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
              Economic Stability
            </h3>
            <p className="mt-1 max-w-4xl text-justify">
            By creating better livelihood opportunities, we aim to uplift families from financial struggles and ensure sustainable incomes.
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
            Social Inclusion
            </h3>
            <p className="mt-1 max-w-4xl text-justify">
            Empowering marginalized voices, including women and children, to build an inclusive and progressive society.
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
            Sustainable Progress
            </h3>
            <p className="mt-1 max-w-4xl text-justify">
            Investing in education, skill development, and financial security to create a self-reliant and thriving community.
            </p>
          </li>
        </ol>
        <p className="mt-4 text-justify max-w-4xl">
        By addressing these challenges, we empower individuals, strengthen families, and set an example for other communities. A brighter future for Patwatoli starts with education, financial security, and equal opportunities for all.
        </p>
      </section>

      <section
        ref={howWeWorkRef}
        className="w-full min-h-[50vh] bg-gray-100 p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">How We Work?</h2>
        <p className="mt-4 text-justify max-w-4xl">
          Empowering Education for All – Vriksh Be The Change
          <br />
          At Vriksh Be The Change, our primary goal is to educate students who are unable to attend school due to financial barriers. To ensure no child is deprived of learning, we provide free basic stationery like notebooks, pens, pencils, and books, making education accessible to all, regardless of age.
          <br/>
          Beyond academics, we focus on instilling values (sanskar), ethics, and life skills to prepare students for a well-rounded future. Our mentorship system, where senior students guide juniors, fosters a culture of support and growth. Additionally, we offer internet access, digital classes, books, and experienced mentors to create a holistic learning environment.
          <br/>
          To sustain this initiative, we introduced the “One Day One Rupee” program, encouraging students to donate one rupee daily from their pocket money, fostering a sense of responsibility. Moreover, generous contributions from society help us support those in need. This trust is a collective effort, driven by the contributions of many, ensuring that education remains a right, not a privilege.
        </p>
      </section>

      <section
        ref={whyTrustUsRef}
        className="w-full min-h-[50vh] bg-white p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold ">Why Trust Us?</h2>
        <p className="mt-4 max-w-4xl text-justify">
        Commitment to Quality Education – Vriksh Be The Change<br/>
        At Vriksh Be The Change, we are deeply committed to providing quality education to students in need. Our initiative goes beyond just supplying essential resources—we also manage a coaching center that offers online classes, library facilities, and mentorship from successful alumni. This creates an environment where students receive the guidance, knowledge, and support necessary to achieve their dreams. Through our unwavering efforts, we strive to empower young minds, break financial barriers, and pave the way for a brighter future.
        </p>
      </section>
    </main>
  );
};

export default Page;
