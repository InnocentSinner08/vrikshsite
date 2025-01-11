"use client";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MediaEvent = ({
  name,
  image,
  content,
  quote,
  date,
  instagram,
}: {
  name: string;
  image: string;
  content: string;
  quote: string;
  date: string;
  instagram: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const trimmedContent = content.slice(0, 200) + "...";

  return (
    <div className="flex flex-wrap-reverse bg-[#D9D9D9] p-4">
      {/* Text Section */}
      <div className="max-w-[350px] flex flex-col justify-between gap-4 pr-4">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-justify">
          {isExpanded ? (
            <div>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <div className="font-bold text-sm"> {quote} </div>
            </div>
          ) : (<div> {trimmedContent} </div> 

          )}
          <div
            className="font-semibold cursor-pointer mt-3 text-right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded ? "Read More >" : "Show Less <"}
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          <div className="text-sm font-semibold text-gray-500">{date}</div>
          <Link href={instagram}>
            <Instagram></Instagram>
          </Link>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="aspect-square w-[300px] relative mb-2">
          <Image src={image} alt={name} fill objectFit="cover"></Image>
        </div>
      </div>
    </div>
  );
};

export default MediaEvent;