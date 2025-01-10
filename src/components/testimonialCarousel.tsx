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
        "I was helpless, at that time VRIKSH raised a hand to support me emotionally and financially also. With me, it also helped my siblings. Today, I became a JEE Aspirant only because of their help and support. I am preparing for IIT-JEE from here not only during the day but also at night also. VRIKSH is aiming to support many children like me who are financially weak but want to achieve their dreams.",
      image: "/images/homepage/kashish kumari.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Hello everyone! I am Suraj Kumar, a member of VRIKSH BE THE CHANGE. VRIKSH has provided me with financial and moral support in achieving my goals. It was a great experience of volunteering here in different activities.",
      expandedText:
        " I have learnt a lot of new things at every point during that time. Also I have learnt Live Living Lessons from CP Bhaiya which helps in enhancing my career. Now I am studying at IIEST Shibpur.",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Kareena Kumari",
      text: "I am Kareena, and Vriksh has been a guiding light in my life—more than just a mentor, they have been like family to me. They have supported and guided me through my studies and challenges, especially during my JEE preparations, which paved the way for my current journey.",
      expandedText:
        "With Vriksh’s constant help and support, I am now studying B.Tech in Metallurgical Engineering at one of the best institutes in India, IIT BHU. Being in my pre-final year of B.Tech, I still find Vriksh by my side whenever I face any issue. I have been a part of the Vriksh family for a long time, and I feel truly lucky to have met such wonderful and kind-hearted people in my life. Vriksh has supported me not only financially but also emotionally and morally, giving me the strength to overcome my challenges. I sincerely thank The Vriksh Be The Change for being a constant source of support and positivity in my life. Their care and guidance have been life-changing, and I will forever be grateful for everything they have done for me.",
      image: "/images/homepage/kareena.jpg",
    },
    {
      name: "Ankush Kumar",
      text: " I am Ankush Kumar currently studying in IIT BOMBAY (B.Tech, First Year, Branch-MEMS). I belong to a poor family. When I decided to crack the IIT JEE Examination, I had no money for preparation for JEE.",
      expandedText:
        "Then VRIKSH BE THE CHANGE came forward to support me and provide me free coaching for JEE and also provide regular guidance about HOW TO PREPARE FOR JEE ? and WHAT TO DO FOR THIS? Finally I got selected in the JEE ADVANCED Examination. I am very thankful to VRIKSH BE THE CHANGE. ",
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
