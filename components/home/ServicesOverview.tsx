"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ServicesOverview() {
  return (
    <section className="bg-fog-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What we do"
            code="JES / 003"
            title="Eight disciplines. One accountable team."
            className="mb-0"
          />
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-navy-900 font-medium text-sm border-b border-navy-900 pb-0.5 hover:border-signal-500 hover:text-signal-600 transition-colors whitespace-nowrap"
            >
              View all services <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel-200">
          {services.map((service, i) => {
            const Icon = (Icons[
              service.icon as keyof typeof Icons
            ] as React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>) ?? Icons.Cog;
            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services#${service.slug}`}
                  className="bracket-corners group block bg-fog-50 hover:bg-white p-7 h-full min-h-[220px] flex flex-col justify-between transition-colors"
                >
                  <div>
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      className="text-signal-500"
                    />
                    <h3 className="mt-5 font-display font-medium text-lg text-navy-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-steel-600 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-steel-500 group-hover:text-signal-600 transition-colors">
                    Learn more <ArrowUpRight size={13} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
