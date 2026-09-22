import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PackageDetail } from "@/components/packages/package-detail";
import { siteConfig } from "@/config/site";
import { getTravelPackageBySlug, travelPackages } from "@/data/packages";

type PackageDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return travelPackages.map((travelPackage) => ({ slug: travelPackage.slug }));
}

export async function generateMetadata({ params }: PackageDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const travelPackage = getTravelPackageBySlug(slug);

  if (!travelPackage) return { title: "Package Not Found" };

  const canonicalPath = `/packages/${travelPackage.slug}`;

  return {
    title: travelPackage.title,
    description: travelPackage.shortDescription,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${travelPackage.title} | ${siteConfig.name}`,
      description: travelPackage.shortDescription,
      type: "website",
      siteName: siteConfig.name,
    },
  };
}

export default async function PackageDetailPage({ params }: PackageDetailPageProps) {
  const { slug } = await params;
  const travelPackage = getTravelPackageBySlug(slug);

  if (!travelPackage) notFound();

  return <PackageDetail travelPackage={travelPackage} />;
}
