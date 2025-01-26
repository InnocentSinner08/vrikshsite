"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Page = () => {
  return (
    <>
      {/* <Swiper
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
            <Image src="/images/aboutus/homepage-1.jpg" alt="hero" fill objectFit="cover"></Image>
            <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center py-8">
              &quot;In the classrooms of VRIKSH PATHSHALA, knowledge grows not
              only in minds but also in the fertile soil of student&apos;s
              hearts, sowing seeds of compassion and environmental
              consciousness.&quot;
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[calc(100vh-12vh)] relative">
            <Image src="/hero.jpg" alt="hero" fill objectFit="cover"></Image>
            <div className="absolute bg-[#0000007a] w-full left-0 bottom-0 flex justify-center items-center text-md px-10 text-white text-center py-8">
              &quot;In the classrooms of VRIKSH PATHSHALA, knowledge grows not
              only in minds but also in the fertile soil of student&apos;s
              hearts, sowing seeds of compassion and environmental
              consciousness.&quot;
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
      <div className="w-full">
        <div className="bg-[#D9D9D9] font-semibold text-lg px-2 py-2 m-4 uppercase text-center">
          Donate to us and shape a child&apos;s future
        </div>

        <div className="flex flex-wrap w-full justify-evenly items-center p-2 pb-4 gap-6">
          <div className="bg-[#D9D9D9] p-10 md:w-[40%] text-xs text-justify">
            Attending school is about more than just learning. Our lives are
            largely shaped by our school memories, which lay the groundwork for
            a secure and happy childhood.<br></br>
            <br></br> A happy childhood, educational opportunities, and
            opportunities for growth are denied to thousands of children in the
            nation who are unable to attend school.<br></br>
            <br></br> Many of them are forced to work in difficult conditions in
            order to make a living, and some of them are slipping into the
            depths of crime and drug abuse. Only when a nation&apos;s children
            are aware, educated, and empowered can that nation truly advance.{" "}
            <br></br>
            <br></br>You can help India&apos;s young people become independent
            and responsible by supporting all of Vriksh BE THE CHANGE&apos;s
            initiatives. Join hands with us to help underprivileged children
            escape the cycle of misery, ignorance, and poverty. Donate for
            Education.
          </div>
          <div className="bg-[greenyellow] p-10 md:w-[40%] flex flex-col items-center">
            <div className="font-bold text-lg">DONATE US</div>
            <div className="font-semibold p-4 text-center">
              Be a leaf of this Vriksh Family by donating us
            </div>
            <button className="font-semibold px-6 py-2 bg-[#D9D9D9]">
              Donate Now
            </button>
            <div className="font-semibold px-6 py-2 bg-[#D9D9D9] m-2 mt-4 text-center">
              Your Contributions Will Never Go To Waste
            </div>
            <div className="text-xs text-center mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore quia tempora delectus mollitia reiciendis recusandae
              error voluptatum perferendis natus! Culpa enim nisi fuga est
              vitae, dolore maxime ipsum dolorem hic!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
