import { Instagram } from "lucide-react";
import Image from "next/image";

const MediaEvent = ({
  name,
  image,
  content,
}: {
  name: string;
  image: string;
  content: string;
}) => {
  return (
    <div className="flex flex-wrap-reverse m-4 bg-[#D9D9D9] p-4">
      <div className="max-w-[350px] flex flex-col justify-between gap-4">
        <div className="font-bold text-lg">{name}</div>
        <div>{content}</div>
      </div>
      <div>
        <div className="aspect-square w-[300px] relative">
          <Image src={image} alt={name} fill objectFit="cover"></Image>
        </div>
      </div>
    </div>
  );
};

export default MediaEvent;
