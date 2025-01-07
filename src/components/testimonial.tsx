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
          {isExpanded ? "show less" : "know more >"}
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
        "Hello everyone! I am Kashish Kumari, a member of VRIKSH BE THE CHANGE. VRIKSH is providing a great opportunity to poor children by giving them free and fair education to study forward. ",
      extraContent:
        "This additional text provides more detailed information about the 'Tayyari Kal Ki' campaign.",
      link: "#",
    },
    {
      image: "/images/homepage/rakhi kumari.jpg",
      title: "Rakhi Kumari",
      content:
        "I am Rakhi. For me Vriksh is a mentor, a friend and like a family  and has supported and guided me through my study and problems, especially during  my JEE preparations which lead me to my current situation.",
      extraContent:
        "This extra content explains the objectives of 'Health Cannot Wait' in more depth.",
      link: "#",
    },
    {
      image: "/images/homepage/ankush kumar.jpg",
      title: "Anksush Kumar",
      content:
        "I ANKUSH KUMAR CURRENTLY STUDYING IN IIT BOMBAY (B.Tech, First Year ,Branch-MEMS) . I belong to a poor family. When I decided to crack IIT JEE Examination, I have no money for preparation for JEE . ",
      extraContent:
        "Additional details about how 'Shiksha Na Ruke' supports education and empowers children.",
      link: "#",
    },
    {
      image: "/images/homepage/nitish kumar.jpg",
      title: "Nitish Kumar",
      content:
        "Hey I am Nitish Kumar. Vriksh helped me when I needed financial and academic support, the Vriksh team helped me in every possible way. ",
      extraContent:
        "Further explanation of how 'She Can Fly' benefits girl children across various areas.",
      link: "#",
    },
    {
      image: "/images/homepage/suraj kumar.jpg",
      title: "Suraj Kumar",
      content: "Hello everyone! I am Suraj Kumar, a member of VRIKSH BE THE CHANGE. VRIKSH has provided me financial and moral support in achieving my goals. It was a great experience of volunteering here in different activities.",
      extraContent:
        "This placeholder represents extra content for the fifth campaign.",
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
