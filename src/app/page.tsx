import Founder from "@/components/founder";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Testimonial from "@/components/testimonial";
import Vriksh from "@/components/vriksh";
import Partners from "@/components/partner-slider";
import RecentEvents from "@/components/recent-events";

export default function Home() {
  return (
    <main>
      <Hero />
      <Founder />
      <Impact />
      <Testimonial />
      <Vriksh />
      <RecentEvents/>
      <Partners/>
    </main>
  );
}
