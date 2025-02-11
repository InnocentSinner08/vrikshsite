"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-white font-semibold text-lg px-2 py-2 m-4 uppercase text-center">
          Donate to us and shape a child&apos;s future
        </div>

        <div className="flex flex-wrap w-full justify-evenly items-center p-2 pb-4 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg md:w-[40%] text-gray-700 text-sm leading-relaxed text-justify">
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
          <div
            className="p-10 shadow-lg rounded-lg md:w-[40%] flex flex-col text-black items-center bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.jpg')" }}
          >
            <div className="font-bold text-md ">DONATE US</div>
            <div className="font-semibold p-2 text-center">
              Be a leaf of this Vriksh Family by donating us
            </div>
            <button className="bg-[#D2B48C] rounded-lg font-semibold px-6 py-2 bg-[#D9D9D9]">
              <Link href= "/qr-code">
              Donate Now
              </Link>
            </button>
            <div className="bg-[#A2C579] font-semibold px-6 py-2 text-black m-2 mt-4 text-center">
              Your Contributions Will Never Go To Waste
            </div>
            <div className="text-md font-semibold text-center mt-6 ">
              Thanks for donating!!!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;