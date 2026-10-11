import type { Metadata } from "next";
import { ShieldCheck, Download } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactSection from "@/components/shared/ContactSection";
import { registrations, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Registrations & Safety",
  description:
    "Company registrations and safety practices of Jalayana Engineering & Services Private Limited.",
};

const safety = [
  "Vessel / yard safety requirements",
  "Permit-to-work systems",
  "Lock-out / tag-out where applicable",
  "Appropriate PPE",
  "Housekeeping",
  "Controlled testing practices",
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        code="JESPL / C01"
        eyebrow="Registrations"
        title="A registered company with a documented way of working."
        description="Corporate and tax registrations of Jalayana Engineering & Services Private Limited, and the safety practices we follow on every job."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Company details"
            code="JESPL / C02"
            title="Registrations."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrations.map((reg, i) => (
              <Reveal key={reg.title} delay={i * 0.06}>
                <div className="bracket-corners border border-steel-200 p-8 h-full flex flex-col items-start">
                  <ShieldCheck size={30} strokeWidth={1.5} className="text-signal-500" />
                  <h3 className="mt-5 font-display font-medium text-navy-900 text-lg">
                    {reg.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-navy-900 break-all">{reg.value}</p>
                  <p className="mt-2 text-sm text-steel-500 leading-relaxed">{reg.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Safety & professional working practices"
              code="JESPL / C03"
              title="Safe, controlled working."
              description="JESPL follows vessel/yard safety requirements and aligns work methods with customer instructions, equipment manuals and applicable marine/yard requirements."
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 grid sm:grid-cols-2 gap-5">
            {safety.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-start gap-3 border-t border-steel-300 pt-4">
                  <span className="font-mono text-xs text-signal-500 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-steel-600">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="bg-fog-50 border border-steel-200 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-display font-medium text-navy-900 text-lg">
                  Download our company profile
                </h3>
                <p className="mt-1 text-sm text-steel-600">
                  Services, execution approach, organisation and company details.
                </p>
              </div>
              <a
                href={siteConfig.profileFile}
                download
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-medium px-5 py-3 transition-colors whitespace-nowrap"
              >
                <Download size={16} /> Company profile (DOCX)
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
