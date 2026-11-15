import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/site/Hero";
import Welcome from "@/components/home/Welcome";
import Values from "@/components/home/Values";
import Work from "@/components/home/Work";
import Facts from "@/components/home/Facts";
import Footprint from "@/components/home/Footprint";
import GalleryStrip from "@/components/home/GalleryStrip";
import Leadership from "@/components/home/Leadership";
import Voices from "@/components/home/Voices";
import ClosingCta from "@/components/home/ClosingCta";
import { brand, programs, states } from "@/data/site";

const SITE_URL = "https://panchvaktrafoundation.com";

const TITLE = "Panchvaktra Human Welfare Foundation — Serving Humanity, Creating Hope";
const DESCRIPTION =
  "Panchvaktra Human Welfare Foundation (Panchvaktra Foundation) supports families with education, nutrition, relief and livelihood support across Rajasthan, Bihar, Delhi and Gujarat.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: brand.name,
  alternateName: brand.short,
  url: SITE_URL,
  logo: brand.emblem,
  image: brand.emblem,
  email: brand.email,
  slogan: brand.tagline,
  description: DESCRIPTION,
  areaServed: states,
  sameAs: [brand.instagram],
  knowsAbout: programs.map((p) => p.title),
  identifier: [
    { "@type": "PropertyValue", name: "CIN", value: brand.cin },
    { "@type": "PropertyValue", name: "Darpan ID", value: brand.darpan },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: brand.name },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: brand.emblem },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: brand.emblem },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(organizationSchema) }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Values />
      <Work />
      <Facts />
      <Footprint />
      <GalleryStrip />
      <Leadership />
      <Voices />
      <ClosingCta />
    </>
  );
}