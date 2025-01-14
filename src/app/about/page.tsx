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
        <p className="mt-4 max-w-4xl text-justify">
          Patwatoli, a locality in the Gaya district of Bihar, is remarkable for
          two things: its skilled weavers and its consistent production of
          IITians. Known as the &quot;Village of IITians,&quot; Patwatoli sees
          about 15-20 of its students clear the highly competitive JEE Advanced
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
        className="w-full min-h-[50vh] bg-gray-100 p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Vision</h2>
        <p className="mt-4 max-w-4xl text-justify">
          It is inspiring to hear about the vision we hold as an inhabitant of
          Patwatoli. Only our understanding of the challenges faced by the
          weaver community and their families reflects a deep commitment to
          addressing these struggles and transforming lives for the better. Our
          vision for the future is truly powerful and forward-thinking
        </p>
        <ol className="list-decimal ">
          <li className="mt-4 ">
            <h3 className="mt-3 text-1xl font-bold  ">
              Creating an Educated and Empowered Generation
            </h3>
            <p className="mt-1 max-w-4xl text-justify">
              It is inspiring to hear about the vision we hold as an inhabitant
              of Patwatoli. Only our understanding of the challenges faced by
              the weaver community and their families reflects a deep commitment
              to addressing these struggles and transforming lives for the
              better. Our vision for the future is truly powerful and
              forward-thinking
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 text-1xl font-bold  ">
              Promoting Gender Equality
            </h3>
            <p className="mt-1 max-w-4xl text-justify">
              Building a world where women and girls have equal access to
              education, opportunities, and the freedom to realize their full
              potential. Through education and empowerment, we can break the
              cycle of inequality and create a fair and just society.
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 text-1xl font-bold  ">
              Fostering Inclusivity and Dignity
            </h3>
            <p className="mt-1 max-w-4xl text-justify">
              Striving for a society where no one is left behind. Every
              individual, regardless of their background, must have the
              opportunity to live with dignity and pursue their aspirations.
              This includes addressing systemic issues that perpetuate poverty
              and inequality.
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 text-1xl font-bold  ">
              Nurturing Inspired and Socially Responsible Youth
            </h3>
            <p className="mt-1 max-w-4xl text-justify">
              Guiding the next generation to be skilled, motivated, and
              compassionate. These young minds should not only achieve personal
              success but also contribute to driving positive change in their
              communities and beyond.
            </p>
          </li>
        </ol>
        <p className="mt-6 max-w-4xl text-justify">
          By working together as a community, Patwatoli can continue to build on
          its legacy of excellence, turning challenges into opportunities and
          inspiring other localities to follow its example. Initiatives like
          scholarships for deserving students, mentorship programs, and
          vocational training for women and youth can serve as the foundation
          for realizing this vision.
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
        className="w-full min-h-[50vh] bg-gray-100 p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">Why Change Needed?</h2>
        <p className="mt-4 text-justify max-w-4xl">
          Change is needed in Patwatoli to address the pressing challenges faced
          by the community and to unlock its full potential for progress and
          prosperity. Here’s why transformation is essential:
        </p>
        <ol className="list-decimal max-w-4xl">
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
              Economic Hardships of Weavers
            </h3>
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>
                Unstable Livelihoods: Most families in Patwatoli rely on weaving
                and daily wage labor, which offer inconsistent and low incomes.
              </li>
              <li>
                Rising Costs of Living: The income from weaving barely meets
                basic needs, leaving little to invest in education or
                healthcare.
              </li>
              <li>
                Generational Poverty: Without intervention, families remain
                trapped in a cycle of poverty, unable to break free.
              </li>
            </ul>
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">why change?</h3>
            <p className="mt-1 max-w-4xl text-justify">
              Economic upliftment through better wages, skill enhancement, and
              diversified livelihood opportunities is essential for improving
              the quality of life.
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
              Limited Access to Education
            </h3>
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>
                Financial Constraints: Many families cannot afford school fees,
                books, or other educational expenses for their children.
              </li>
              <li>
                Dropout Rates: Children, especially girls, are often forced to
                leave school to work and contribute to the family income.
              </li>
              <li>
                Lack of Resources: Limited access to coaching or quality
                educational facilities reduces the chances of children competing
                in exams like JEE.
              </li>
            </ul>
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">why change?</h3>
            <p className="mt-1 max-w-4xl text-justify">
              Affordable and quality education can empower children to dream
              big, secure better opportunities, and uplift their families.
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
              Gender Inequality
            </h3>
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>
                Societal Norms: Women and girls often face limited opportunities
                for education and employment due to traditional gender roles.
              </li>
              <li>
                Underutilized Potential: Many women possess skills but lack
                platforms or resources to contribute economically and socially.
              </li>
            </ul>
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">why change?</h3>
            <p className="mt-1 max-w-4xl text-justify">
              Promoting gender equality ensures every individual can contribute
              their talent and potential, creating a more balanced and
              progressive society.
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
              Lack of Social and Economic Mobility
            </h3>
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>
                Overdependence on Weaving: With few alternative opportunities,
                families are unable to diversify their incomes.
              </li>
              <li>
                No Safety Nets: Absence of social security or financial aid
                makes families vulnerable to crises, like illness or job loss.
              </li>
            </ul>
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">why change?</h3>
            <p className="mt-1 max-w-4xl text-justify">
              Creating opportunities for economic and social mobility will
              empower the next generation to explore diverse career paths and
              break free from inherited hardships.
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
              Sustaining the Legacy of IITians
            </h3>
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>
                Inconsistent Support: The remarkable legacy of producing IITians
                is under threat due to the financial and educational challenges
                faced by families.
              </li>
              <li>
                Unrealized Potential: Many talented students cannot afford
                coaching or lack guidance to excel in competitive exams.
              </li>
            </ul>
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">why change?</h3>
            <p className="mt-1 max-w-4xl text-justify">
              Investing in education and creating a support system for students
              will ensure the village continues to inspire the nation as a
              "Village of IITians."
            </p>
          </li>
          <li className="mt-4 ">
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">
              Building a Resilient and Inclusive Community
            </h3>
            <ul className="list-disc list-inside space-y-1 max-w-3xl">
              <li>
                Marginalized Voices: Many in the community, including women,
                girls, and the elderly, lack platforms to voice their needs.
              </li>
              <li>
                Dignity and Rights: A large portion of the population lives
                without access to basic rights like education, healthcare, and
                social security.
              </li>
            </ul>
            <h3 className="mt-3 mb-2 text-1xl font-bold  ">why change?</h3>
            <p className="mt-1 max-w-4xl text-justify">
              A resilient and inclusive society where everyone has equal
              opportunities and access to resources ensures long-term
              sustainable development.
            </p>
          </li>
        </ol>
        <p className="mt-4 text-justify max-w-4xl">
          <h3 className="mt-3 mb-2 text-1xl font-bold  ">In conclusion</h3>
          Change in Patwatoli is not just needed—it is essential. Addressing
          these challenges will help build a community that is economically
          stable, socially inclusive, and capable of fulfilling its immense
          potential. It will pave the way for empowered individuals, stronger
          families, and a future where Patwatoli stands as a model of resilience
          and progress for others to emulate.
        </p>
      </section>

      <section
        ref={howWeWorkRef}
        className="w-full min-h-[50vh] bg-white p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">How We Work?</h2>
        <p className="mt-4 text-justify max-w-4xl">
          Our primary goal is to educate students who cannot attend school due
          to financial barriers. To support their learning journey, we provide
          free basic stationery such as notebooks, pens, pencils, and books,
          ensuring no cost is a burden. Our program is open to students of all
          age groups, allowing anyone to participate and benefit.Beyond bookish
          knowledge, we also focus on imparting sanskar—values, ethics, and life
          skills. A unique aspect of our initiative is the mentorship system,
          where higher-class students guide and mentor their juniors.
          Additionally, we offer access to essential resources like the
          internet, books, digital classes and experienced mentors to create a
          supportive learning environment for all.
          <br />
          To sustain this initiative, we have introduced a program called “One
          Day One Rupee,” where each student donates one rupee per day from
          their pocket money, fostering a sense of responsibility and
          contribution among the learners.Apart from this, many people of our
          society donate us to help the needy ones.This trust is not running by
          single person but everyone has equal contribution in fostering a
          nurturing community.
        </p>
      </section>

      <section
        ref={whyTrustUsRef}
        className="w-full min-h-[50vh] bg-white p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold ">Why Trust Us?</h2>
        <p className="mt-4 text-center max-w-4xl text-justify">
          We have demonstrated an unwavering commitment to provide quality
          education to our students.Our program not only supplies essential
          resources but also manages the coaching center, where online classes,
          library facilities, and guidance from successful alumni create an
          environment conducive to success.
        </p>
      </section>
    </main>
  );
};

export default Page;
