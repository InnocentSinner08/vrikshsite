import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <div className="w-full aspect-[5/4] sm:aspect-auto bg-[#b8cdc1] flex justify-center items-center">
            <div className="w-full max-h-[86vh] aspect-video relative">
              <Image src="/images/homepage/QR.png" alt="vriksh" fill objectFit="contain"></Image>
            </div>
           

          </div>
          <div className="bg-white font-semibold text-lg px-2 py-2 m-4 uppercase text-center">
          Scan to Donate us
        </div>
    </main>
  );
}
