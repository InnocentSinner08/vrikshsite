"use client";
import { useState } from "react";
import NewTestimonial from "./newtestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialCarousel = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const data = [
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
    {
      name: "Suraj Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      expandedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem similique nulla eaque ipsa temporibus aliquid deleniti placeat, rerum molestiae magni minima neque corrupti ea voluptas iure blanditiis expedita ex?",
      image: "/images/homepage/suraj kumar.jpg",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
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
        {data.map((info, idx) => {
          return (
            <SwiperSlide>
              <NewTestimonial
                name={info.name}
                text={info.text}
                expandedText={info.expandedText}
                image={info.image}
                open={openIdx == idx + 1 ? true : false}
                setOpenIdx={setOpenIdx}
                idx={idx + 1}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
