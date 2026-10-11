import Reveal from "@/components/ui/Reveal";

interface PageHeroProps {
  code: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHero({ code, eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-navy-950 pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bp-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-signal-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel-300">
              {code} — {eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl text-balance">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-steel-300 text-base leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
