import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { TyreBrand, TyreProduct } from "@/lib/tyre-brands";
import { productImagePath } from "@/lib/tyre-brands";
import ImagePlaceholder from "./ImagePlaceholder";

const WHATSAPP_QUOTE =
  "https://wa.me/27818849807?text=Hello%2C%20I%20saw%20your%20website%20and%20need%20a%20quote%20for%20tyres.";

export default function ProductCard({
  brand,
  product,
}: {
  brand: TyreBrand;
  product: TyreProduct;
}) {
  return (
    <article
      id={product.slug}
      className={`overflow-hidden rounded-xl bg-white shadow-lg border-t-4 border-primary dark:bg-neutral-800 ${
        product.hero ? "md:grid md:grid-cols-[minmax(240px,38%)_1fr]" : ""
      }`}
    >
      <ImagePlaceholder
        label={product.name}
        filename={productImagePath(brand.slug, product.imageFile)}
        className={product.hero ? "h-full min-h-[280px] rounded-none border-0 border-b md:border-b-0 md:border-r border-primary/20" : "rounded-none border-0 border-b border-primary/20"}
      />

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {product.hero ? (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Shop hero
            </span>
          ) : null}
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            {product.category}
          </span>
          {product.patternCode ? (
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {product.patternCode}
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 text-2xl font-extrabold text-neutral-800 dark:text-white sm:text-3xl">
          {product.name}
        </h3>
        <p className="mt-2 font-semibold text-neutral-700 dark:text-neutral-200">
          {product.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
          {product.description}
        </p>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          {product.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {product.specs.map((spec) => (
            <div key={spec.label} className="rounded-lg bg-neutral-100 p-3 dark:bg-neutral-900">
              <dt className="text-xs font-bold uppercase tracking-wide text-primary">
                {spec.label}
              </dt>
              <dd className="mt-1 text-sm text-neutral-800 dark:text-neutral-200">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wide text-primary">Typical sizes</p>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
            {product.typicalSizes.join(" · ")}
          </p>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-semibold text-neutral-800 dark:text-white">Best for: </span>
            {product.bestFor}
          </p>
        </div>

        <Button asChild className="mt-6 bg-primary font-bold text-white hover:bg-primary/90">
          <Link href={WHATSAPP_QUOTE}>WhatsApp a quote for {product.name}</Link>
        </Button>
      </div>
    </article>
  );
}
