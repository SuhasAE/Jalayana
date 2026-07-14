import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import PageLoader from "@/components/layout/PageLoader";

export const metadata: Metadata = {
  title: {
    default: "Jalayana Engineering & Services Limited",
    template: "%s | Jalayana Engineering & Services Limited",
  },
  description:
    "Jalayana Engineering & Services Limited delivers turnkey marine engineering, ship repair, and heavy industrial services with precision, reliability, and engineering excellence.",
  keywords: [
    "ship repair",
    "marine engineering",
    "turnkey projects",
    "heavy engineering",
    "shiplifts",
    "Jalayana Engineering",
  ],
  openGraph: {
    title: "Jalayana Engineering & Services Limited",
    description:
      "Precision marine and heavy engineering services built on trust, reliability, and innovation.",
    siteName: "Jalayana Engineering & Services Limited",
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
