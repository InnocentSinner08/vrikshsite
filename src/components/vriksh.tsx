import Image from "next/image";

const Vrikhs = () => {
  return (
    <div className="w-full aspect-video relative">
      <Image src="/vriksh.png" alt="vriksh" fill objectFit="contain"></Image>
    </div>
  );
};

export default Vrikhs;
