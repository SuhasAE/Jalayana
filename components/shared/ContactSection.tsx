"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-navy-900 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bp-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 relative grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Get in touch"
            code="JES / 009"
            title="Tell us about your project."
            description="Whether it's a scoped repair or a full turnkey project, our team will respond within one business day."
            light
          />
          <div className="mt-10 space-y-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-steel-200 hover:text-white transition-colors"
            >
              <Phone size={17} className="text-signal-500" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-steel-200 hover:text-white transition-colors"
            >
              <Mail size={17} className="text-signal-500" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 text-steel-200">
              <MapPin size={17} className="text-signal-500" />
              {siteConfig.address}
            </div>
          </div>

          <div className="mt-8 aspect-[4/3] border border-white/15 overflow-hidden">
            <iframe
              title="Jalayana Engineering location map"
              src="https://www.google.com/maps?q=Karwar,Karnataka,India&output=embed"
              className="w-full h-full grayscale contrast-125 opacity-80"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            {submitted ? (
              <div className="bg-white/5 border border-white/15 p-10 h-full flex flex-col justify-center items-start">
                <h3 className="font-display font-medium text-white text-2xl">
                  Message received.
                </h3>
                <p className="mt-3 text-steel-300 text-sm max-w-sm">
                  Thanks for reaching out — someone from our team will get
                  back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-steel-400 mb-2">
                      Full name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-steel-500 outline-none focus:border-signal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-steel-400 mb-2">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-steel-500 outline-none focus:border-signal-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-steel-400 mb-2">
                    Company
                  </label>
                  <input
                    placeholder="Company name (optional)"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-steel-500 outline-none focus:border-signal-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-steel-400 mb-2">
                    Project details
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us what you're looking to get done"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-steel-500 outline-none focus:border-signal-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 bg-signal-500 hover:bg-signal-600 text-white font-medium px-6 py-3.5 transition-colors"
                >
                  Send inquiry
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
