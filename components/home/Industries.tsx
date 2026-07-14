import * as Icons from "lucide-react";
import { industries } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Industries() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Industries served"
          code="JES / 005"
          title="Trusted across defence, commercial, and infrastructure sectors."
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => {
            const Icon = (Icons[
              industry.icon as keyof typeof Icons
            ] as React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>) ?? Icons.Anchor;
            return (
              <Reveal key={industry.title} delay={i * 0.06}>
                <div className="bracket-corners border border-steel-200 p-8 h-full flex flex-col items-start gap-4 hover:border-signal-500 transition-colors">
                  <Icon size={28} strokeWidth={1.5} className="text-navy-900" />
                  <h3 className="font-display font-medium text-navy-900 text-base">
                    {industry.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
