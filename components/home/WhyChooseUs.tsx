import { ShieldCheck, Clock, Users, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const points = [
  {
    icon: ShieldCheck,
    title: "Safety-first culture",
    description:
      "Every project runs under strict safety protocols, from surface preparation to final commissioning.",
  },
  {
    icon: Clock,
    title: "Schedule discipline",
    description:
      "Dry-dock time is expensive. We plan and execute against firm timelines, not estimates.",
  },
  {
    icon: Users,
    title: "Accountable teams",
    description:
      "One project manager, one point of contact, full visibility across every engineering discipline involved.",
  },
  {
    icon: Award,
    title: "Engineering rigor",
    description:
      "Technical decisions are backed by qualified engineers, not just experience alone.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-900 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bp-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <SectionHeading
          eyebrow="Why choose us"
          code="JES / 004"
          title="Built for projects that can't afford delay."
          light
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06}>
              <div className="border-t border-white/15 pt-6">
                <point.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-signal-500 mb-4"
                />
                <h3 className="font-display font-medium text-white text-lg">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-steel-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
