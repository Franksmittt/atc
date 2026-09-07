import { CircleDot } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  filename: string;
  className?: string;
  aspect?: "logo" | "product";
};

export default function ImagePlaceholder({
  label,
  filename,
  className = "",
  aspect = "product",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center border-2 border-dashed border-primary/40 bg-neutral-900 text-center text-white ${
        aspect === "logo" ? "aspect-[3/1] min-h-[72px] px-4" : "aspect-[4/5] min-h-[220px] px-6"
      } ${className}`}
      role="img"
      aria-label={`${label} image placeholder. Add ${filename}`}
    >
      <CircleDot className="mb-3 h-10 w-10 text-primary" aria-hidden="true" />
      <p className="text-sm font-bold uppercase tracking-wide">{label}</p>
      <p className="mt-1 text-xs text-neutral-400">Image placeholder</p>
      <p className="mt-2 max-w-[16rem] break-all font-mono text-[11px] text-primary/90">
        {filename}
      </p>
    </div>
  );
}
