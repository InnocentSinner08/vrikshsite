import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:p-12 p-4 pt-8">
      <div className="flex items-center justify-center md:justify-evenly p-2 w-full flex-wrap">
        <div className="w-[200px] h-[200px] relative rounded-full"><Image
          src="/images/homepage/cp bhaiya.png"
          alt="founder"
          fill
          objectFit="cover"
          className="rounded-full"
        /></div>
        <div className="flex flex-col py-4 justify-between items-center min-h-[200px]">
          <h1 className="font-bold text-2xl">MEET OUR FOUNDER</h1>
          <div className="max-w-[750px] text-center p-5">
            Our journey began with a simple yet profound belief—that education is the most powerful catalyst to bring about lasting change. At Vriksh, we are committed to nurturing dreams, breaking barriers, and providing free and fair education to less-privileged students through initiatives like PATHSHALA as well as SANSKARSHALA.
            Pathshala focuses on academic excellence, equipping young minds with the knowledge and skills to overcome challenges and achieve their potential. Sanskarshala, on the other hand, emphasizes values, culture, and life skills, fostering holistic development to shape responsible and compassionate individuals. Together, these initiatives embody our mission of transforming lives and empowering communities.
            Every child deserves the opportunity to learn, grow, and thrive. Through our collective efforts, we aim to create an inclusive environment where knowledge becomes a stepping stone to a brighter future. Together, we strive to empower individuals and build a society where education is a right, not a privilege.
            I extend my heartfelt gratitude to our supporters, volunteers, partners and our lovable students who share our vision. Your dedication fuels our mission and inspires us to reach greater heights. Let us continue to plant the seeds of change and nurture a world filled with hope, opportunity, and equality.
            Education is incomplete without values; knowledge must be paired with wisdom and character.
            Thank you for being part of this transformative journey.<br></br>

            Warm regards,<br></br>
            <strong> Chandrakant Pateshwari</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
