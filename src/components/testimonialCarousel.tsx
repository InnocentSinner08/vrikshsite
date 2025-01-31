"use client";
import { useState } from "react";
import NewTestimonial from "./newtestimonial";

const TestimonialCarousel = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const data = [
    {
      name: "Kashish Kumari",
      text: " Hello everyone! I am Kashish Kumari, a member of VRIKSH BE THE CHANGE. VRIKSH is providing a great opportunity to poor children by giving them free and fair education to study forward. When I was about 8 years old, my father passed away.",
      expandedText:
        "I was helpless, but at that time, VRIKSH extended a hand to support me both emotionally and financially. Along with me, they also helped my siblings. Today, I am a JEE aspirant only because of their help and support. I am preparing for IIT-JEE here, not only during the day but also at night. VRIKSH aims to support many children like me who are financially weak but have big dreams to achieve.",
      image: "/images/homepage/kashish kumari.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Hello everyone! I am Suraj Kumar, a member of VRIKSH BE THE CHANGE. VRIKSH has provided me with both financial and moral support in achieving my goals. Volunteering here in various activities has been a great experience.",
      expandedText:
        "I have learned many new things at every step of my journey. Additionally, I have gained valuable Life-Living Lessons from CP Bhaiya, which have helped enhance my career. Now, I am studying at IIEST Shibpur.",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Kareena Kumari",
      text: "I am Kareena, and Vriksh has been a guiding light in my life—more than just a mentor, it has been like family to me. Vriksh has supported and guided me through my studies and challenges, especially during my JEE preparations, which paved the way for my current journey.",
      expandedText:
        "With Vriksh’s constant help and support, I am now pursuing a B.Tech in Metallurgical Engineering at one of India’s top institutes, IIT BHU. As a pre-final year student, I still find Vriksh by my side whenever I face any challenges. Being a part of the Vriksh family for so long, I feel truly fortunate to have met such wonderful and kind-hearted people. Vriksh has supported me not only financially but also emotionally and morally, giving me the strength to overcome obstacles. I sincerely thank Vriksh Be The Change for being a constant source of support and positivity in my life. Their care and guidance have been life-changing, and I will forever be grateful for everything they have done for me.",
      image: "/images/homepage/kareena.jpg",
    },
    {
      name: "Ankush Kumar",
      text: "I am Ankush Kumar, currently studying at IIT Bombay (B.Tech, First Year, MEMS). I come from a financially weak background. When I decided to crack the IIT JEE examination, I had no money for JEE preparation.",
      expandedText:
        "That’s when VRIKSH BE THE CHANGE stepped forward to support me by providing free coaching for JEE and regular guidance on how to prepare for JEE and what steps to take. With their constant support, I successfully cleared the JEE Advanced examination. I am deeply grateful to VRIKSH BE THE CHANGE for their invaluable help and guidance.",
      image: "/images/homepage/ankush kumar.jpg",
    },
  ];
  return (
    <div className="bg-black bg-opacity-10 px-4 py-8 flex flex-col items-center justify-center gap-6">
      <div className="text-3xl font-bold text-center">TESTIMONIALS</div>
      <div className="flex justify-center items-start gap-5 flex-wrap">

        {data.map((info, idx) => {
          return (
            <NewTestimonial
              name={info.name}
              text={info.text}
              expandedText={info.expandedText}
              image={info.image}
              open={openIdx == idx + 1 ? true : false}
              setOpenIdx={setOpenIdx}
              idx={idx + 1}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
