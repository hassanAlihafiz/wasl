import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Platforms from "@/components/Platforms";
import Features from "@/components/Features";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Platforms />
      <Features />
      <Quote />
      <CTA />
      <Footer />
    </>
  );
}
