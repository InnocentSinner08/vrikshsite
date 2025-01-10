"use client";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const NewTestimonial = ({
  image,
  text,
  expandedText,
  name,
  open,
  setOpenIdx,
  idx,
}: {
  image: string;
  text: string;
  expandedText: string;
  name: string;
  open: boolean;
  setOpenIdx: Dispatch<SetStateAction<number>>;
  idx: number;
}) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="shift p-2 rounded-xl max-w-[300px] border-black border flex flex-col flex-grow h-full min-h-[600px]">
      <div className="relative w-full aspect-[7/8] rounded-xl">
        <Image
          src={image}
          alt="testimonial"
          fill
          className="rounded-xl object-cover"
        ></Image>
        <div
          className={`absolute bottom-2 left-4 text-white font-bold text-3xl uppercase ${bebas.className} z-10`}
        >
          {firstName}
          <br></br>
          {lastName}
        </div>
      </div>
      <div className="max-w-[300px] px-2 flex-grow flex flex-col">
        <div className="text-justify mt-2 flex-grow">{text}</div>
        {open && <div className="text-justify">{expandedText}</div>}
        <div
          className="font-semibold cursor-pointer mt-3 text-right"
          onClick={() => {
            setOpenIdx(open ? 0 : idx);
          }}
        >
          {!open ? "Read More >" : "Show Less <"}
        </div>
      </div>
    </div>
  );
};

export default NewTestimonial;
