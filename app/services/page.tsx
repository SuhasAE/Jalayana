import type { Metadata } from "next";
import * as Icons from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FAQAccordion from "@/components/shared/FAQAccordion";
import ContactSection from "@/components/shared/ContactSection";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Jalayana Engineering & Services Limited's full range of marine and heavy engineering services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        code="JES / S01"
        eyebrow="Services"
        title="Engineering services built for the full project lifecycle."
        description="From single-discipline repairs to fully managed turnkey projects, our services are structured to give you one accountable team."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 space-y-px bg-steel-200">
          {services.map((service, i) => {
            const Icon = (Icons[
              service.icon as keyof typeof Icons
            ] as React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>) ?? Icons.Cog;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 bg-white"
              >
                <Reveal delay={i * 0.03}>
                  <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 px-1">
                    <div className="md:col-span-4 flex items-start gap-4">
                      <span className="font-mono text-xs text-steel-400 pt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        size={30}
                        strokeWidth={1.5}
                        className="text-signal-500"
                      />
                    </div>
                    <div className="md:col-span-8">
                      <h2 className="font-display font-medium text-2xl text-navy-900">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-steel-600 leading-relaxed max-w-2xl">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-fog-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Common questions"
            code="JES / S02"
            title="Frequently asked questions."
            className="mb-12"
          />
          <FAQAccordion />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
