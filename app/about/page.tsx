import type { Metadata } from "next";
import { Target, Eye, Check, UserRound } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactSection from "@/components/shared/ContactSection";
import {
  mission,
  organisation,
  capabilities,
  leadership,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About us",
  description:
    "About Jalayana Engineering & Services Private Limited (JESPL) — our vision, mission, leadership, organisation and field capability.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        code="JESPL / A01"
        eyebrow="About us"
        title="A marine engineering and technical services company."
        description="JESPL was established to provide integrated ship machinery maintenance, repair, refurbishment and project-execution services."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Company introduction"
              code="JESPL / A02"
              title="One-stop marine engineering & ship maintenance solutions."
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-center">
            <Reveal delay={0.1}>
              <p className="text-steel-600 text-[17px] leading-relaxed">
                JESPL is positioned as a one-stop technical partner for
                shipyards, vessel owners, operators and marine projects, with a
                service portfolio covering mechanical, electrical,
                instrumentation, piping, accommodation, galley, insulation,
                painting and testing works.
              </p>
              <p className="mt-5 text-steel-600 text-[17px] leading-relaxed">
                Our operating philosophy is simple: understand the equipment
                and vessel requirement, plan the job correctly, execute safely
                and systematically, test the completed work, and provide clear
                technical documentation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-fog-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="What drives us"
            code="JESPL / A03"
            title="Vision and mission."
            className="mb-14"
          />
          <div className="grid lg:grid-cols-12 gap-8">
            <Reveal className="lg:col-span-5">
              <div className="bg-white border border-steel-200 p-8 h-full">
                <Eye size={26} strokeWidth={1.5} className="text-signal-500" />
                <h3 className="mt-5 font-display font-medium text-navy-900 text-lg">
                  Our vision
                </h3>
                <p className="mt-2 text-sm text-steel-600 leading-relaxed">
                  To build JESPL into a trusted and technically capable marine
                  engineering service partner for ship repair, shipbuilding,
                  vessel maintenance and industrial marine applications.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7">
              <div className="bg-white border border-steel-200 p-8 h-full">
                <Target size={26} strokeWidth={1.5} className="text-signal-500" />
                <h3 className="mt-5 font-display font-medium text-navy-900 text-lg">
                  Our mission
                </h3>
                <ul className="mt-3 space-y-3">
                  {mission.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-steel-600 leading-relaxed">
                      <Check size={16} className="text-signal-500 mt-0.5 shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Leadership"
            code="JESPL / A04"
            title="Directors."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bracket-corners border border-steel-200 p-8 flex items-start gap-4">
                  <UserRound size={28} strokeWidth={1.5} className="text-signal-500 shrink-0" />
                  <div>
                    <h3 className="font-display font-medium text-navy-900 text-lg">{p.name}</h3>
                    <p className="mt-1 text-sm text-steel-600">{p.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Initial organisation & manpower"
            code="JESPL / A05"
            title="The team structure behind every job."
            className="mb-12"
          />
          <div className="border border-steel-200 bg-white divide-y divide-steel-200">
            {organisation.map((row, i) => (
              <Reveal key={row.position} delay={i * 0.03}>
                <div className="grid md:grid-cols-12 gap-2 md:gap-8 p-5 md:px-8">
                  <h3 className="md:col-span-4 font-display font-medium text-navy-900">
                    {row.position}
                  </h3>
                  <p className="md:col-span-8 text-sm text-steel-600">{row.responsibility}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Workshop & field capability development"
              code="JESPL / A06"
              title="Portable marine-service equipment and a network of specialist facilities."
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="space-y-4">
              {capabilities.map((c, i) => (
                <Reveal key={c} delay={i * 0.04}>
                  <li className="flex items-start gap-3 border-t border-steel-200 pt-4 text-steel-600">
                    <Check size={18} className="text-signal-500 mt-0.5 shrink-0" />
                    {c}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
