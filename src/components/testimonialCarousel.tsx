"use client";
import { useState } from "react";
import NewTestimonial from "./newtestimonial";

const TestimonialCarousel = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const data = [
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
  ];
  return (
    <div className="bg-black bg-opacity-10 px-4 py-8 flex flex-col items-center justify-center gap-6 min-h-[100vh]">
      <div className="text-3xl font-bold text-center">TESTIMONIALS</div>
      <div className="flex justify-center items-start gap-6 px-2 flex-wrap">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
