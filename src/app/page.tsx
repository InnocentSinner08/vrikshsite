import Founder from "@/components/founder";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Videoslider from "@/components/video-slider";
import Vriksh from "@/components/vriksh";
import Partners from "@/components/partner-slider";
import RecentEvents from "@/components/recent-events";
import TestimonialSection from "@/components/testimonial";
import NewTestimonial from "@/components/newtestimonial";
import TestimonialCarousel from "@/components/testimonialCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Founder />
      <Impact />
      <Videoslider />
      {/* <TestimonialSection /> */}
      <TestimonialCarousel/>
      <RecentEvents />
      <Partners />

    </main>
  );
}
