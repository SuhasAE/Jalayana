import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import PageLoader from "@/components/layout/PageLoader";

const NAME = "Jalayana Engineering & Services Private Limited";

export const metadata: Metadata = {
  title: {
    default: `${NAME} (JESPL) | Marine Engineering & Ship Maintenance`,
    template: `%s | ${NAME}`,
  },
  description:
    "JESPL — one-stop marine engineering and ship maintenance solutions: ship machinery maintenance, repair, refurbishment and turnkey project execution from Karwar, Karnataka.",
  keywords: [
    "marine engineering",
    "ship repair",
    "ship maintenance",
    "turnkey ship repair",
    "marine engines",
    "DG sets",
    "pumps and valves",
    "Karwar",
    "JESPL",
    "Jalayana Engineering & Services",
  ],
  openGraph: {
    title: NAME,
    description:
      "One-stop marine engineering & ship maintenance solutions — ship repair, machinery overhaul, electrical, instrumentation and turnkey project execution.",
    siteName: NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
