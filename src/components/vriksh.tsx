import Image from "next/image";

const Vrikhs = () => {
  return (
    <div className="w-full aspect-[5/4] sm:aspect-auto bg-[#b8cdc1] flex justify-center items-center">
      <div className="w-full max-h-[86vh] aspect-video relative">
        <Image src="/vriksh.png" alt="vriksh" fill objectFit="contain"></Image>
      </div>
    </div>
  );
};

export default Vrikhs;
