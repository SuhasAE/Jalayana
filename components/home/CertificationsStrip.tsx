import { ShieldCheck } from "lucide-react";
import { registrations } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function CertificationsStrip() {
  return (
    <section className="bg-fog-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Registrations"
          code="JESPL / 007"
          title="A registered private limited company."
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {registrations.map((reg, i) => (
            <Reveal key={reg.title} delay={i * 0.06}>
              <div className="flex items-start gap-4 bg-white border border-steel-200 p-6 h-full">
                <ShieldCheck size={22} strokeWidth={1.5} className="text-signal-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="font-display font-medium text-navy-900">{reg.title}</h3>
                  <p className="mt-1 font-mono text-[13px] text-navy-900 break-all">{reg.value}</p>
                  <p className="mt-1 text-xs text-steel-500">{reg.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
