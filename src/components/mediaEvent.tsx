"use client";

import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MediaEvent = ({
  name,
  image,
  content,
  date,
  instagram,
}: {
  name: string;
  image: string;
  content: string;
  date: string;
  instagram: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const trimmedContent = content.slice(0, 200) + "...";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row overflow-hidden max-w-[800px]">
      
      {/* Image Section */}
      <div className="relative w-full md:w-[300px] h-[250px] md:h-auto">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between p-6 w-full md:w-[calc(100%-300px)]">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
          <div className="text-sm text-gray-600 text-justify">
            {isExpanded ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: trimmedContent }} />
            )}
          </div>
          <div
            className="text-right text-indigo-600 text-sm font-medium cursor-pointer mt-2 hover:underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded ? "Read More >" : "Show Less <"}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 text-sm text-gray-500">
          <span>{date}</span>
          <Link href={instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-pink-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediaEvent;
