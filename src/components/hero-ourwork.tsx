"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroOurWork = () => {
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
        <div className="w-full h-[calc(100vh)] relative">
          <Image src="/vriksh.png" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex flex-col justify-center items-center text-md px-10 text-white text-center py-8">
            <span className="font-semibold italic">&quot;Celebrating Excellence and Dedication at the &apos;Samman Samaroh&apos;!&quot; </span>
            Honoring the hard work and commitment of these changemakers, who are stepping up for free and fair education for all. Together, we continue to inspire and build a brighter future!
            
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-12vh)] relative">
          <Image src="/images/homepage/2_top.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex flex-col justify-center items-center text-md px-10 text-white text-center py-8">
          <span className="font-semibold italic">  &quot;Where curiosity meets guidance and learning becomes a joy!&quot; </span>
            At Vriksh Pathshala, every child is empowered with the tools of education to dream big and achieve more. Together, we shape brighter futures, one lesson at a time.

            
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-12vh)] relative">
          <Image src="/images/homepage/3_top.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex flex-col justify-center items-center text-md px-10 text-white text-center py-8">
          <span className="font-semibold italic"> &quot;United by the spirit of change and learning!&quot;</span>
            A proud moment with our dedicated team and young learners under the shade of knowledge and growth at Vriksh Pathshala. Together, we nurture dreams and build a brighter future.

          
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-12vh)] relative">
          <Image src="/images/homepage/4_top.jpg" alt="hero" fill objectFit="cover"></Image>
          <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex flex-col justify-center items-center text-md px-10 text-white text-center py-8">
          <span className="font-semibold italic"> &quot;Learning knows no boundaries! &quot;</span>
            Our online classes bring knowledge and opportunities right to where the students are, ensuring education for all, anytime, anywhere. Together, we bridge gaps and build brighter futures.
          
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroOurWork;
