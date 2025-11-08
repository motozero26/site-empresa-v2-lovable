import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ServiceCarousel from "@/components/ServiceCarousel";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import LeadMagnet from "@/components/LeadMagnet";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <ServiceCarousel />
      <Testimonials />
      <About />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
