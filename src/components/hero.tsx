"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-12vh)] relative">
          <Image src="/hero.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center py-8">
            &quot;In the classrooms of VRIKSH PATHSHALA, knowledge grows not
            only in minds but also in the fertile soil of student&apos;s hearts,
            sowing seeds of compassion and environmental consciousness.&quot;
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-12vh)] relative">
          <Image src="/hero.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center py-8">
            &quot;In the classrooms of VRIKSH PATHSHALA, knowledge grows not
            only in minds but also in the fertile soil of student&apos;s hearts,
            sowing seeds of compassion and environmental consciousness.&quot;
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
