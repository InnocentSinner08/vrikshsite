import Link from "next/link";
import React from "react";

const Testimonial = () => {
  return (
    <div className="md:p-12">
      <div className="flex items-center flex-wrap justify-evenly gap-6">
        <iframe
          src="https://www.youtube.com/embed/kSjBohHSetA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="aspect-video max-w-[90%] sm:w-[40%]"
        ></iframe>
        <div className="max-w-[50%] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas
          pariatur neque at ad expedita recusandae odit, quod quae. Nesciunt
          laboriosam accusamus quas beatae obcaecati consectetur soluta quam
          maiores quaerat.
        </div>
      </div>
      <div className="text-center mt-8">
        <Link
          href="/testimonials"
          className="bg-green text-white px-4 py-2"
        >
          Testimonials
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
