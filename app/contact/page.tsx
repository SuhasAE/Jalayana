import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/shared/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jalayana Engineering & Services Limited for project inquiries and consultations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        code="JES / X01"
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Reach out for repair scoping, turnkey project proposals, or general inquiries — our team responds within one business day."
      />
      <ContactSection />
    </>
  );
}
