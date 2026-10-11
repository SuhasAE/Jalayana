import { executionStages } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

interface Props {
  code?: string;
  background?: string;
}

export default function ExecutionApproach({ code = "JESPL / 006", background = "bg-white" }: Props) {
  return (
    <section className={`${background} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Project execution approach"
          code={code}
          title="From survey to handover — six controlled stages."
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200 border border-steel-200">
          {executionStages.map((item, i) => (
            <Reveal key={item.stage} delay={i * 0.05}>
              <div className="bg-white p-8 h-full">
                <span className="font-mono text-xs text-signal-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display font-medium text-navy-900 text-xl">
                  {item.stage}
                </h3>
                <p className="mt-2 text-sm text-steel-600 leading-relaxed">
                  {item.approach}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
