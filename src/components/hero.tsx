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
          <Image src="/images/homepage/1_top.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center py-8">
            &quot;Celebrating Excellence and Dedication at the &apos;Samman Samaroh&apos;!
            Honoring the hard work and commitment of these changemakers, who are stepping up for free and fair education for all. Together, we continue to inspire and build a brighter future!
            &quot;
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-12vh)] relative">
          <Image src="/images/homepage/2_top.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center py-8">
            &quot;Where curiosity meets guidance and learning becomes a joy!”
            At Vriksh Pathshala, every child is empowered with the tools of education to dream big and achieve more. Together, we shape brighter futures, one lesson at a time.

            &quot;
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-12vh)] relative">
          <Image src="/images/homepage/3_top.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center py-8">
            &quot;United by the spirit of change and learning!”
            A proud moment with our dedicated team and young learners under the shade of knowledge and growth at Vriksh Pathshala. Together, we nurture dreams and build a brighter future.

            &quot;
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-12vh)] relative">
          <Image src="/images/homepage/4_top.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center py-8">
            &quot;Learning knows no boundaries!”
            Our online classes bring knowledge and opportunities right to where the students are, ensuring education for all, anytime, anywhere. Together, we bridge gaps and build brighter futures.
            &quot;
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
