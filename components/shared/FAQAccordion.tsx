"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-steel-200 border-t border-b border-steel-200">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={faq.question} delay={i * 0.05}>
            <div>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display font-medium text-navy-900 text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-steel-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out overflow-hidden"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 text-sm text-steel-600 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
