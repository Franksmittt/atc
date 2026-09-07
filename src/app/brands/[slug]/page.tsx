import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandProfile from "@/components/brands/BrandProfile";
import { getAllBrandSlugs, getBrand } from "@/lib/tyre-brands";

type BrandPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: BrandPageProps): Metadata {
  const brand = getBrand(params.slug);
  if (!brand) {
    return { title: "Tyre brand | Alberton Tyre Clinic" };
  }

  const hero = brand.products[0]?.name;
  return {
    title: `${brand.name} Tyres Alberton | ${hero} & current lines`,
    description: `${brand.name} tyres fitted in Alberton. ${brand.tagline} Shop hero: ${hero}.`,
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = getBrand(params.slug);
  if (!brand) {
    notFound();
  }

  return <BrandProfile brand={brand} />;
}
