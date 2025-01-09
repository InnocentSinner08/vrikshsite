"use client";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

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
  return (
    <div className="shift p-1 rounded-xl max-w-[350px]">
      <div className="relative">
        <Image
          src={image}
          alt="testimonial"
          width={350}
          height={400}
          className="rounded-xl"
        ></Image>
        <div className="absolute bottom-2 left-4 text-white font-bold text-2xl uppercase">
          {name}
        </div>
      </div>
      <div className="max-w-[350px] px-2">
        <div className="text-justify mt-2">{text}</div>
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
