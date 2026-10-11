import Link from "next/link";
import { Download } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site-config";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white bp-grid relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="md:col-span-4">
            <Logo height={44} />
            <p className="mt-5 font-display font-medium text-[15px]">
              {siteConfig.name}
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-widest text-steel-400 uppercase">
              One-stop marine engineering &amp; ship maintenance solutions
            </p>
            <p className="mt-4 text-steel-300 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-steel-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.profileFile}
                  download
                  className="flex items-center gap-1.5 text-sm text-steel-300 hover:text-white transition-colors"
                >
                  <Download size={13} /> Company profile
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-steel-500 mb-4">
              Registered office
            </p>
            <p className="text-sm text-steel-300 leading-relaxed">
              {siteConfig.address}
            </p>
            <div className="mt-5 space-y-1.5 text-sm text-steel-300">
              {siteConfig.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="block hover:text-white transition-colors"
                >
                  {p}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                className="block hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-steel-500 mb-4">
              Company details
            </p>
            <dl className="space-y-2 text-sm text-steel-300">
              <div><dt className="inline text-steel-500">CIN: </dt><dd className="inline">{siteConfig.cin}</dd></div>
              <div><dt className="inline text-steel-500">GSTIN: </dt><dd className="inline">{siteConfig.gstin}</dd></div>
              <div><dt className="inline text-steel-500">PAN: </dt><dd className="inline">{siteConfig.pan}</dd></div>
              <div><dt className="inline text-steel-500">UDYAM: </dt><dd className="inline">{siteConfig.udyam}</dd></div>
            </dl>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-steel-500 font-mono">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-steel-500 font-mono">JESPL</p>
        </div>
      </div>
    </footer>
  );
}
