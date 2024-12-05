import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Hero />
    </main>
  );
}
