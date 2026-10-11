import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/shared/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jalayana Engineering & Services Private Limited, Karwar — for ship repair, marine engineering and maintenance quotations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        code="JESPL / X01"
        eyebrow="Contact"
        title="Tell us about your vessel or equipment."
        description="Reach out for survey and repair scoping, turnkey work-package proposals, or general inquiries."
      />
      <ContactSection />
    </>
  );
}
