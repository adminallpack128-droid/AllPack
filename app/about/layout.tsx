import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Allpack - Professional Packaging Design",
  description: "Learn about Allpack's mission, vision, and 8+ years of expertise in designing premium agricultural and industrial packaging solutions. Trusted by 200+ clients across India.",
  keywords: "about Allpack, packaging design company, agricultural packaging, fertilizer bags, professional packaging solutions",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
