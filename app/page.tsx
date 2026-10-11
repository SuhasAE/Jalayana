import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import Stats from "@/components/home/Stats";
import ExecutionApproach from "@/components/shared/ExecutionApproach";
import CertificationsStrip from "@/components/home/CertificationsStrip";
import ContactSection from "@/components/shared/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesOverview />
      <WhyChooseUs />
      <Industries />
      <Stats />
      <ExecutionApproach />
      <CertificationsStrip />
      <ContactSection />
    </>
  );
}
