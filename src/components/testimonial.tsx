"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Testimonial = () => {
  const slides = [
    {
      videoSrc: "https://www.youtube.com/embed/kSjBohHSetA",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas
        pariatur neque at ad expedita recusandae odit, quod quae. Nesciunt
        laboriosam accusamus quas beatae obcaecati consectetur soluta quam
        maiores quaerat.`,
    },
    {
      videoSrc: "https://www.youtube.com/embed/PNGF3vSM6mk?si=U4jqSChdmMdxkE6F",
      content: `Fugiat provident pariatur autem a iure consequuntur omnis ad cum
        tempora praesentium rem exercitationem nemo doloremque quia, nostrum
        itaque velit! Ipsum, nulla!`,
    },
  ];

  return (
    <>
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[calc(100vh-12vh)] flex flex-col items-center justify-center md:flex-row gap-6 px-8 py-6">
            {/* Video Section */}
            <iframe
              src={slide.videoSrc}
              title={`YouTube Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="aspect-video w-full max-w-[90%] md:max-w-[50%]"
            ></iframe>

            {/* Text Content Section */}
            <div className="text-center max-w-[85%] md:max-w-[40%] text-sm md:text-lg">
              {slide.content}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="text-center mb-8">
        <Link href="/testimonials" className="bg-green text-white px-4 py-2">
          Testimonials
        </Link>
      </div>

    </>
  );
};

export default Testimonial;
