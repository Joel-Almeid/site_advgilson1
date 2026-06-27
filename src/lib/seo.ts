// Shared JSON-LD LocalBusiness payload for all pages
export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Gilson Carvalho — Advocacia",
  image: "https://gilsoncarvalho.com/logo_gilson.png",
  logo: "https://gilsoncarvalho.com/logo_gilson.png",
  url: "https://gilsoncarvalho.com",
  telephone: "+556398474070",
  email: "advogado@gilsoncarvalho.com",
  priceRange: "$$$",
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Guanabara, nº 1669",
    addressLocality: "Gurupi",
    addressRegion: "TO",
    postalCode: "77400-000",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/gilsoncarvalho.adv/"],
};

export const jsonLdScript = (extra?: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify(extra ? { ...LOCAL_BUSINESS_JSONLD, ...extra } : LOCAL_BUSINESS_JSONLD),
});
