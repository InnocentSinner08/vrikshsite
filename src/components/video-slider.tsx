"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const videoslider = () => {
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
      content: `From the humble village of Patwatoli to the esteemed halls of IITs, Jitendra Bhaiya shares an inspiring journey of determination, progress, and the transformative power of education.  His story shines a spotlight on the relentless efforts of a community that dared to dream big and work harder to turn those dreams into reality.
A special highlight is the remarkable rise in literacy rates among girls, proving that when education is prioritized, lives and futures are transformed. It’s a testament to the power of collective action, resilience, and the belief that education can bridge gaps and break barriers.
This story serves as a beacon of hope and motivation for all—showing that change is possible when passion meets perseverance. Let us celebrate these achievements and continue working towards a world where every child has the opportunity to learn and succeed.
`,
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
    </>
  );
};

export default videoslider;
