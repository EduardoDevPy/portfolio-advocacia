import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorityStrip from "@/components/AuthorityStrip";
import PainSection from "@/components/PainSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AuthorityStrip />
      <PainSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
