import type { Metadata } from "next";
import { Mail } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactSection from "@/components/shared/ContactSection";
import { organisation, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work with Jalayana Engineering & Services Private Limited — marine engineers, technicians, fabricators and support staff.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        code="JESPL / K01"
        eyebrow="Careers"
        title="Work on real marine machinery, in real shipyards."
        description="JESPL deploys skilled manpower across mechanical, electrical, instrumentation, fabrication and project roles. If your skills match one of the roles below, get in touch."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Roles in our team"
            code="JESPL / K02"
            title="Where you could fit in."
            className="mb-12"
          />
          <div className="divide-y divide-steel-200 border-t border-b border-steel-200">
            {organisation.map((role, i) => (
              <Reveal key={role.position} delay={i * 0.04}>
                <div className="grid md:grid-cols-12 gap-2 md:gap-8 py-6">
                  <h3 className="md:col-span-4 font-display font-medium text-navy-900 text-lg">
                    {role.position}
                  </h3>
                  <p className="md:col-span-8 text-sm text-steel-600">{role.responsibility}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 bg-fog-50 border border-steel-200 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-display font-medium text-navy-900 text-lg">
                  Interested in joining?
                </h3>
                <p className="mt-1 text-sm text-steel-600">
                  Email your CV and the role you are interested in to {siteConfig.email}.
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Application — JESPL")}`}
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-medium px-5 py-3 transition-colors whitespace-nowrap"
              >
                <Mail size={16} /> Send your CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
