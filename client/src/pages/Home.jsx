import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import FarmersSection from "../components/FarmersSection";
import StorySection from "../components/StorySection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <FarmersSection />
      <StorySection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
