import { ArrowUpRight } from "lucide-react";
import { newsItems } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function LatestNews() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Latest news"
          code="JES / 008"
          title="Updates from the yard."
          className="mb-12"
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group border-t border-steel-300 pt-5 h-full flex flex-col">
                <p className="font-mono text-[11px] uppercase tracking-widest text-steel-400">
                  {item.date}
                </p>
                <h3 className="mt-3 font-display font-medium text-navy-900 text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-steel-600 leading-relaxed flex-1">
                  {item.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-navy-900 group-hover:text-signal-600 transition-colors w-fit">
                  Read more <ArrowUpRight size={13} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
