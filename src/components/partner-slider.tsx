"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const OurPartners = () => {
    const partners = [
        { name: "Neet Jee", src: "/images/homepage/NeetJee_logo.png" },
        { name: "NSS", src: "/images/homepage/NSS Logo.png" },
        // { name: "SBI", src: "/images/homepage/SBI logo.png" },
        { name: "ConceptNSolution", src: "/images/homepage/ConceptNSolution .jpg" }
    ];

    return (
        <div className="w-full bg-white py-10">
            <h2 className="text-center text-3xl font-bold mb-6">
                OUR <span className="text-black-600">PARTNERS</span>
            </h2>
            <div className="w-full overflow-hidden">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={4000}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 }, // Small screens
                        640: { slidesPerView: 3, spaceBetween: 20 }, // Tablets
                        1024: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
                    }}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="h-24 w-40 relative">
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    {partners.map((partner, index) => (
                        <SwiperSlide key={`duplicate-${index}`} className="flex justify-center items-center">
                            <div className="h-24 w-40 relative">
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OurPartners;
