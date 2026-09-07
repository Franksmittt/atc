import { brandLogoPath } from "@/lib/tyre-brands";

type BrandLogoProps = {
  slug: string;
  name: string;
  className?: string;
};

export default function BrandLogo({ slug, name, className = "" }: BrandLogoProps) {
  return (
    <div className={`flex items-center justify-center bg-white ${className}`}>
      {/* Mixed official SVG/PNG wordmarks — native img keeps SVG colour intact */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brandLogoPath(slug)}
        alt={`${name} logo`}
        className="h-10 w-auto max-h-16 max-w-[200px] object-contain sm:h-12"
      />
    </div>
  );
}
