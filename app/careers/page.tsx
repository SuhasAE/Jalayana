import type { Metadata } from "next";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactSection from "@/components/shared/ContactSection";
import { jobOpenings } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Jalayana Engineering & Services Limited.",
};

const perks = [
  "Hands-on engineering work across disciplines",
  "Clear project ownership and accountability",
  "Safety-first working environment",
  "Growth alongside an expanding company",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        code="JES / K01"
        eyebrow="Careers"
        title="Build your career alongside real engineering work."
        description="We're growing our team of engineers and technicians. Openings below are a starting point — reach out even if you don't see an exact fit."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionHeading
              eyebrow="Why work here"
              code="JES / K02"
              title="What it's like on our team."
            />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="grid sm:grid-cols-2 gap-5">
              {perks.map((perk, i) => (
                <Reveal key={perk} delay={i * 0.06}>
                  <div className="flex items-start gap-3 border-t border-steel-300 pt-4">
                    <span className="font-mono text-xs text-signal-500 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-steel-600 leading-relaxed">
                      {perk}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fog-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Open roles"
            code="JES / K03"
            title="Current openings."
            className="mb-12"
          />
          <div className="divide-y divide-steel-200 border-t border-b border-steel-200">
            {jobOpenings.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.05}>
                <a
                  href="#contact"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6"
                >
                  <div>
                    <h3 className="font-display font-medium text-navy-900 text-lg">
                      {job.title}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-4 text-xs text-steel-500 font-mono uppercase tracking-wide">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> {job.type}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 group-hover:text-signal-600 transition-colors">
                    Apply <ArrowUpRight size={15} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
