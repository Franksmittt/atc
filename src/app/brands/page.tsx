import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/brands/BrandLogo";
import { TYRE_BRANDS } from "@/lib/tyre-brands";

export const metadata: Metadata = {
  title: "Tyre Brands in Alberton | Bridgestone, Continental, Goodyear, Dunlop, Hankook",
  description:
    "Current South African passenger and bakkie tyre brands fitted at Alberton Tyre Clinic: Bridgestone, Continental, Goodyear, Dunlop and Hankook, with the lines we actually quote.",
};

export default function BrandsIndexPage() {
  return (
    <main>
      <section className="border-b-8 border-primary bg-neutral-900 pb-20 pt-32 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold uppercase sm:text-5xl">
            Tyre brands <span className="text-primary">we fit</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            South Africa&apos;s passenger and light-vehicle market is led by local factories —
            Bridgestone, Continental, Goodyear and Sumitomo/Dunlop — with Hankook strong in the
            next retail tier. These are the current lines we quote in Alberton, not discontinued
            patterns.
          </p>
        </div>
      </section>

      <section className="bg-neutral-100 py-20 dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-1">
            {TYRE_BRANDS.map((brand) => {
              const hero = brand.products[0];
              return (
                <article
                  key={brand.slug}
                  className="overflow-hidden rounded-xl bg-white shadow-lg border-t-4 border-primary dark:bg-neutral-800 md:grid md:grid-cols-[200px_1fr_auto]"
                >
                  <BrandLogo
                    slug={brand.slug}
                    name={brand.name}
                    className="h-full min-h-[140px] border-b border-neutral-200 px-6 py-8 md:border-b-0 md:border-r"
                  />
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">
                      #{brand.rank} · Shop hero: {hero.name}
                    </p>
                    <h2 className="mt-2 text-3xl font-extrabold text-neutral-800 dark:text-white">
                      {brand.name}
                    </h2>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">{brand.tagline}</p>
                    <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                      {brand.saPresence}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {brand.products.map((product) => (
                        <li
                          key={product.slug}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                        >
                          {product.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center p-6">
                    <Button asChild className="w-full bg-primary font-bold text-white hover:bg-primary/90">
                      <Link href={`/brands/${brand.slug}`}>View {brand.name} products</Link>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-neutral-500 dark:text-neutral-400">
            Exact national unit-share figures sit behind paid reports. Rankings here follow local
            manufacturing presence and what South African retailers still stock and promote in
            2025–2026. Michelin and Pirelli remain strong premium import options — ask us if you
            want those quoted alongside this five.
          </p>
        </div>
      </section>
    </main>
  );
}
