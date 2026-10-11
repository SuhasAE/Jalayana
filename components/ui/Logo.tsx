import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number;
}

// The JESPL logo is blue/orange, so on dark backgrounds it sits on a white chip.
export default function Logo({ className, height = 34 }: LogoProps) {
  const width = Math.round(height * (855 / 416));
  return (
    <span className={cn("inline-flex items-center bg-white px-2 py-1 rounded-sm", className)}>
      <Image
        src="/images/logo.png"
        alt="JESPL logo"
        width={width}
        height={height}
        priority
        style={{ height, width: "auto" }}
      />
    </span>
  );
}
