import { stats } from "@/lib/site-config";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function Stats() {
  return (
    <section className="bg-fog-100 py-16 md:py-20 border-y border-steel-200">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl text-navy-900">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-steel-600 leading-snug max-w-[180px] mx-auto lg:mx-0">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center lg:text-left text-xs text-steel-400 font-mono">
          Figures shown are placeholders and will be updated as Jalayana Engineering grows.
        </p>
      </div>
    </section>
  );
}
