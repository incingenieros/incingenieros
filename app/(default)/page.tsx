export const metadata = {
  title: "Incigenieros.com",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import SpecializationAreas from "@/components/workflows";
import Features from "@/components/features";
import IndustrialSection from "@/components/industrial-section";
import NavalOffshoreSection from "@/components/naval-offshore-section";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <SpecializationAreas />
      <Features />
      <IndustrialSection />
      <NavalOffshoreSection />
      <Testimonials />
      <Cta />
      <ContactSection />
    </>
  );
}
