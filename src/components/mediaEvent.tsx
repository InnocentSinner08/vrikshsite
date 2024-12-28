import { Instagram } from "lucide-react";
import Image from "next/image";

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
  return (
    <div className="flex flex-wrap m-4 bg-[#D9D9D9] p-4">
      {/* Text Section */}
      <div className="max-w-[350px] flex flex-col justify-between gap-4">
        <div className="font-bold text-lg">{name}</div>
        <div>{content}</div>
        <div className="text-sm font-semibold text-gray-500 mt-4">{date}</div>
      </div>
      {/* Image Section */}
      <div className="flex flex-col items-center">
        <div className="aspect-square w-[300px] relative mb-2">
          <Image src={image} alt={name} fill objectFit="cover"></Image>
        </div>
        {/* Instagram Logo */}
        {/* <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <Instagram className="w-6 h-6" />
        </a> */}
      </div>
    </div>
  );
};

export default MediaEvent;
