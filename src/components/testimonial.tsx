"use client";
import { useState } from "react";
import Image from "next/image";

const TestimonialCard = ({
  image,
  title,
  content,
  extraContent,
  link,
}: {
  image: string;
  title: string;
  content: string;
  extraContent: string;
  link: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-lg font-bold px-2 py-1 rounded">
          {title}
        </div>
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <p className="text-gray-700 mb-4">{content}</p>
        {isExpanded && <p className="text-gray-600 mt-2">{extraContent}</p>}
        <button
          onClick={toggleExpand}
          className="text-green-600 font-semibold hover:underline self-start"
        >
          {isExpanded ? "Show less " : "Know more ..."}
        </button>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      image: "/images/homepage/kashish kumari.jpg",
      title: "Kashish Kumari",
      content:
        "Hello everyone! I am Kashish Kumari, a member of VRIKSH BE THE CHANGE. VRIKSH is providing a great opportunity to poor children by giving them free and fair education to study forward.",
      extraContent:
        "Hello everyone! I am Kashish Kumari, a member of VRIKSH BE THE CHANGE. VRIKSH is providing a great opportunity for underprivileged children by offering them free and fair education to help them pursue their studies.When I was about 8 years old, my father passed away. I was helpless, but at that time, VRIKSH extended a hand to support me both emotionally and financially. Along with me, it also helped my siblings.Today, I am a JEE aspirant only because of their help and support. I am preparing for IIT-JEE here, not only during the day but also at night. VRIKSH aims to support many children like me who are financially weak but have big dreams to achieve.",
      link: "#",
    },
    {
      image: "/images/homepage/rakhi kumari.jpg",
      title: "Rakhi Kumari",
      content:
        "I am Rakhi. For me Vriksh is a mentor, a friend and like a family  and has supported and guided me through my study and problems, especially during  my JEE preparations which lead me to my current situation.",
      extraContent:
        "With the selfless help and support from  Vriksh, currently I am doing B. Tech in Computer Engineering from one of the best NITs, NIT Kurukshetra. I am currently in my pre-final year of my B. Tech course. And till date, Vriksh is always there whenever I have some issue. I've been a member of the Vriksh family for a long time and I always feel blessed to have met such good people in my life. Vriksh has been a great support to me morally as well as financially. I want to say my heartfelt thanks and appreciation to The Vriksh Be The Change.",
      link: "#",
    },
    {
      image: "/images/homepage/ankush kumar.jpg",
      title: "Ankush Kumar",
      content:
        "I ANKUSH KUMAR CURRENTLY STUDYING IN IIT BOMBAY (B.Tech, First Year, Branch-MEMS). I belong to a poor family. When I decided to crack IIT JEE Examination, I have no money for preparation for JEE. ",
      extraContent:
        "Then VRIKSH BE THE CHANGE came forward to support me and provide me free coaching for JEE and also provide regular guidance about HOW TO PREPARE FOR JEE ? and WHAT TO DO FOR THIS? Finally I got selected in the JEE ADVANCED Examination. I am very thankful to VRIKSH BE THE CHANGE.",
      link: "#",
    },
    {
      image: "/images/homepage/nitish kumar.jpg",
      title: "Nitish Kumar",
      content:
        "Hey I am Nitish Kumar. Vriksh helped me when I needed financial and academic support, the Vriksh team helped me in every possible way. ",
      extraContent:
        "They provided me with resources, guidance, and motivation, which helped me reach where I am today—studying at IIT BHU. Without their support, this wouldn’t have been possible, and I will always be grateful to them.",
      link: "#",
    },
    {
      image: "/images/homepage/suraj kumar.jpg",
      title: "Suraj Kumar",
      content: "Hello everyone! I am Suraj Kumar, a member of VRIKSH BE THE CHANGE. VRIKSH has provided me financial and moral support in achieving my goals. It was a great experience of volunteering here in different activities.",
      extraContent:
        "I have learnt a lot of new things at every point during that time. Also I have learnt Live Living Lessons from CP Bhaiya which helps in enhancing my career. Now I am studying at IIEST Shibpur.",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
