import type { Metadata } from "next";
import { ShieldCheck, Download } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactSection from "@/components/shared/ContactSection";
import { certifications } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications and registrations held by Jalayana Engineering & Services Limited.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        code="JES / C01"
        eyebrow="Certifications"
        title="Held to a documented standard."
        description="Certification details below are placeholders, to be updated once formal registrations are complete."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Our credentials"
            code="JES / C02"
            title="Certifications and registrations."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.06}>
                <div className="bracket-corners border border-steel-200 p-8 h-full flex flex-col items-start">
                  <ShieldCheck
                    size={30}
                    strokeWidth={1.5}
                    className="text-signal-500"
                  />
                  <h3 className="mt-5 font-display font-medium text-navy-900 text-lg">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-500 leading-relaxed">
                    {cert.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 bg-fog-50 border border-steel-200 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-display font-medium text-navy-900 text-lg">
                  Download our company profile
                </h3>
                <p className="mt-1 text-sm text-steel-600">
                  A full overview of our capabilities, structure, and standards.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-medium px-5 py-3 transition-colors whitespace-nowrap">
                <Download size={16} /> Company profile (PDF)
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
