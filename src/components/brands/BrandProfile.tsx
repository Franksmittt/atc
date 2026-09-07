import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TYRE_BRANDS, type TyreBrand } from "@/lib/tyre-brands";
import BrandLogo from "./BrandLogo";
import ProductCard from "./ProductCard";

const WHATSAPP_QUOTE =
  "https://wa.me/27818849807?text=Hello%2C%20I%20saw%20your%20website%20and%20need%20a%20quote%20for%20tyres.";

export default function BrandProfile({ brand }: { brand: TyreBrand }) {
  const heroProduct = brand.products.find((product) => product.hero) ?? brand.products[0];
  const otherBrands = TYRE_BRANDS.filter((item) => item.slug !== brand.slug);

  return (
    <main>
      <section className="border-b-8 border-primary bg-neutral-900 pb-20 pt-32 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Tyre brands · #{brand.rank} in our SA line-up
          </p>
          <div className="mt-6 grid items-center gap-10 md:grid-cols-[220px_1fr]">
            <BrandLogo
              slug={brand.slug}
              name={brand.name}
              className="min-h-[96px] rounded-xl px-6 py-5"
            />
            <div>
              <h1 className="text-4xl font-extrabold uppercase sm:text-5xl">
                {brand.name} <span className="text-primary">Tyres</span> in Alberton
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-neutral-300">{brand.tagline}</p>
              <p className="mt-3 max-w-3xl text-neutral-400">{brand.saPresence}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-neutral-800">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
            <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white">
              About {brand.name}
            </h2>
            {brand.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="grid content-start gap-4 sm:grid-cols-2">
            {brand.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border-t-4 border-primary bg-neutral-100 p-5 shadow-md dark:bg-neutral-900"
              >
                <dt className="text-xs font-bold uppercase tracking-wide text-primary">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-semibold text-neutral-800 dark:text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-neutral-100 py-20 dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white sm:text-4xl">
              Current {brand.name} lines we fit
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              We lead with <span className="font-bold text-primary">{heroProduct.name}</span>.
              Sizes, compounds and warranties vary by fitment — WhatsApp us for what is on the
              shelf today. Manufacturer mileage warranties have their own terms (registration,
              alignment and rotation).
            </p>
          </div>

          <div className="space-y-10">
            {brand.products.map((product) => (
              <ProductCard key={product.slug} brand={brand} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-neutral-800">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-extrabold text-neutral-800 dark:text-white">
            Other brands we stock
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherBrands.map((item) => (
              <Link
                key={item.slug}
                href={`/brands/${item.slug}`}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-shadow hover:border-primary hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
              >
                <BrandLogo
                  slug={item.slug}
                  name={item.name}
                  className="mb-4 min-h-[72px] rounded-lg border border-neutral-200 px-4 py-3 dark:border-neutral-700"
                />
                <p className="text-xs font-bold uppercase tracking-wide text-primary">
                  #{item.rank}
                </p>
                <p className="mt-1 text-lg font-extrabold text-neutral-800 dark:text-white">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Hero: {item.products[0]?.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-extrabold">Need this {brand.name} in your size?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg">
            Send your tyre size or car model and we will quote fitment, balancing and alignment
            from Alberton Tyre Clinic.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white font-bold text-primary hover:bg-neutral-100">
              <Link href={WHATSAPP_QUOTE}>WhatsApp a tyre quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent font-bold text-white hover:bg-white/10">
              <Link href="/assessment">Book a FREE assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
