import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:p-12 p-4 pt-8">
      <div className="flex items-center justify-center md:justify-evenly p-2 w-full flex-wrap">
        <div className="flex flex-col gap-2 justify-center items-center"><div className="w-[200px] h-[200px] relative rounded-full"><Image
          src="/images/homepage/cp bhaiya.png"
          alt="founder"
          fill
          objectFit="cover"
          objectPosition="center"
          className="rounded-full border-[#30BD19] border-[2px] border-spacing-2"
        /></div>
          <div className="font-bold">Chandrakant Pateshwari</div></div>
        <div className="flex flex-col py-4 justify-between items-center min-h-[200px]">
          <h1 className="font-bold text-2xl">MEET OUR FOUNDER</h1>
          <div className="max-w-[750px] text-justify p-5">
            Our journey began with the belief that education is the most powerful catalyst for lasting change. At Vriksh, we are committed to nurturing dreams, breaking barriers, and providing free, fair education to less-privileged students through initiatives like PATHSHALA and SANSKARSHALA.
            <br></br> <br></br>Pathshala focuses on academic excellence, equipping young minds with the knowledge and skills to overcome challenges and achieve their potential. Sanskarshala, on the other hand, emphasizes values, culture, and life skills, fostering holistic development to shape responsible and compassionate individuals.
            <br></br><br></br>Our mission is to transform lives and empower communities by creating an inclusive environment where knowledge becomes a stepping stone to a brighter future.
            <br></br> <br></br>I extend my heartfelt gratitude to our supporters, volunteers, partners, and lovable students who share our vision.
            Let us continue to plant the seeds of change and nurture a world filled with hope, opportunity, and equality.

            <br></br> <br></br><span className="font-bold italic">&quot;Education is incomplete without values; knowledge must be paired with wisdom and character.&quot;</span>
            <br></br><br/>

            Warm Regards,<br></br>
            <strong> Chandrakant Pateshwari</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
