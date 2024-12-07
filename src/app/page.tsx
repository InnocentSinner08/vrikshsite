import Founder from "@/components/founder";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Hero />
      <Founder />
      <Impact />
    </main>
  );
}
