import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ExecutionApproach from "@/components/shared/ExecutionApproach";
import ContactSection from "@/components/shared/ContactSection";
import { turnkeySteps, documentation } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projects & Execution",
  description:
    "How Jalayana Engineering & Services Private Limited plans, executes, tests and documents turnkey ship repair and maintenance work packages.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        code="JESPL / P01"
        eyebrow="Projects"
        title="Turnkey ship repair & maintenance, run through one interface."
        description="JESPL coordinates multi-disciplinary vessel work packages — typically combining engine-room machinery, pumps, valves, piping, electrical work, instrumentation, accommodation, galley, insulation and painting."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Turnkey packages"
              code="JESPL / P02"
              title="What a turnkey package covers."
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="space-y-4">
              {turnkeySteps.map((step, i) => (
                <Reveal key={step} delay={i * 0.05}>
                  <li className="flex items-start gap-3 border-t border-steel-200 pt-4 text-steel-600">
                    <Check size={18} className="text-signal-500 mt-0.5 shrink-0" />
                    {step}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ExecutionApproach code="JESPL / P03" background="bg-fog-50" />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Quality & documentation"
            code="JESPL / P04"
            title="A clear technical trail from inspection to handover."
            description="For each applicable job, JESPL aims to provide the following records."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
            {documentation.map((doc, i) => (
              <Reveal key={doc} delay={i * 0.03}>
                <div className="flex items-start gap-3 border-t border-steel-200 py-4">
                  <span className="font-mono text-xs text-signal-500 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-steel-600">{doc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-steel-600 leading-relaxed">
            Specialist calibration, machining, balancing, rewinding, NDT or
            other outsourced activities can be coordinated through suitable
            competent facilities according to the project requirement and
            customer specification.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
