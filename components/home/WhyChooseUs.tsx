import * as Icons from "lucide-react";
import { whyUs } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-900 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bp-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <SectionHeading
          eyebrow="Why JESPL"
          code="JESPL / 004"
          title="Built for marine maintenance that needs one point of ownership."
          light
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((point, i) => {
            const Icon = (Icons[
              point.icon as keyof typeof Icons
            ] as React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>) ?? Icons.Cog;
            return (
              <Reveal key={point.title} delay={i * 0.06}>
                <div className="border-t border-white/15 pt-6 h-full">
                  <Icon size={24} strokeWidth={1.5} className="text-signal-500 mb-4" />
                  <h3 className="font-display font-medium text-white text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
