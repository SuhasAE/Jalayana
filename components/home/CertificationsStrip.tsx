import { ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function CertificationsStrip() {
  return (
    <section className="bg-fog-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Certifications"
          code="JES / 007"
          title="Held to a documented standard."
          className="mb-12"
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="flex items-start gap-4 bg-white border border-steel-200 p-6 h-full">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.5}
                  className="text-signal-500 shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-display font-medium text-navy-900">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-steel-500">{cert.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
