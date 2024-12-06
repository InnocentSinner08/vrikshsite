import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:p-8">
      <div className="flex items-center justify-center p-2 w-full flex-wrap md:gap-32">
        <div className="w-[200px] h-[200px] relative rounded-full"><Image
          src="/founder.jpeg"
          alt="founder"
          fill
          objectFit="cover"
          className="rounded-full"
        /></div>
        <div className="flex flex-col py-4 justify-between items-center min-h-[200px]">
          <h1 className="font-bold text-2xl">MEET OUR FOUNDER</h1>
          <div className="max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            obcaecati iure delectus architecto itaque optio mollitia vel.
            Tempore totam sapiente facilis eveniet nihil perspiciatis
            voluptatem, quis voluptas odio voluptatibus dolorem?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
