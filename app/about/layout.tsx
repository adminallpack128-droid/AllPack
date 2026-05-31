import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Allpack Creation - Professional Packaging Design",
  description: "Learn about Allpack Creation's mission, vision, and 8+ years of expertise in designing premium agricultural and industrial packaging solutions. Trusted by 200+ clients across India.",
  keywords: "about allpack creation, packaging design company, agricultural packaging, fertilizer bags, professional packaging solutions",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
