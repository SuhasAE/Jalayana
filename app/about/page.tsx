import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactSection from "@/components/shared/ContactSection";
import { timeline } from "@/lib/site-config";
import { Target, Eye, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about Jalayana Engineering & Services Limited — our mission, vision, and approach to marine and heavy engineering.",
};

const values = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "To deliver marine and heavy engineering work that clients can trust without having to double-check it — on time, on spec, every time.",
  },
  {
    icon: Eye,
    title: "Our vision",
    description:
      "To become the most dependable engineering partner on India's western coast, known as much for how we work as for what we deliver.",
  },
  {
    icon: HeartHandshake,
    title: "Our values",
    description:
      "Safety, precision, and accountability — applied the same way whether the project is small or spans months.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        code="JES / A01"
        eyebrow="About us"
        title="A team built around engineering discipline."
        description="Jalayana Engineering & Services Limited brings together marine, structural, and electrical engineering expertise under one accountable roof."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Our story"
              code="JES / A02"
              title="Founded on a simple idea: do the job right."
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-center">
            <Reveal delay={0.1}>
              <p className="text-steel-600 text-[17px] leading-relaxed">
                Jalayana Engineering &amp; Services Limited was established
                to address a persistent gap in the ship repair and heavy
                engineering industry — the need for a single team that can
                own a project end-to-end without handing off responsibility
                between contractors.
              </p>
              <p className="mt-5 text-steel-600 text-[17px] leading-relaxed">
                As a growing company, we are building our track record
                project by project, with the same engineering rigor and
                safety standards used by the most established names in the
                industry.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-fog-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="What drives us"
            code="JES / A03"
            title="Mission, vision, and values."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-steel-200 p-8 h-full">
                  <v.icon size={26} strokeWidth={1.5} className="text-signal-500" />
                  <h3 className="mt-5 font-display font-medium text-navy-900 text-lg">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Company history"
            code="JES / A04"
            title="Our journey so far."
            description="Placeholder milestones — this timeline will be updated as the company reaches real milestones."
            className="mb-14"
          />
          <div className="relative pl-6 md:pl-0">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-steel-300 md:-translate-x-1/2" />
            <div className="space-y-10 md:space-y-0">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div
                    className={`relative md:grid md:grid-cols-2 md:gap-12 md:py-8 ${
                      i % 2 === 1 ? "" : ""
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-signal-500 -translate-x-[calc(50%-0.5px)] md:-translate-x-1/2" />
                    <div
                      className={
                        i % 2 === 0
                          ? "md:text-right md:pr-12"
                          : "md:col-start-2 md:pl-12"
                      }
                    >
                      <span className="font-mono text-xs uppercase tracking-widest text-steel-400">
                        {item.year}
                      </span>
                      <h3 className="mt-1 font-display font-medium text-navy-900 text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-steel-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
