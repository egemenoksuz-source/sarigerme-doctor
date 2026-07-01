import { siteInfo } from "../data/site";

export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteInfo.name,
    url: siteInfo.domain,
    telephone: siteInfo.phoneDisplay,
    email: siteInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sarigerme",
      addressRegion: "Muğla",
      addressCountry: "TR",
    },
    areaServed: [
      "Sarigerme",
      "Dalaman",
      "Ortaca",
      "Fethiye",
      "Dalyan",
      "Göcek",
    ],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    medicalSpecialty: [
      "Emergency Medicine",
      "General Practice",
      "Ambulance Service",
      "IV Therapy",
      "Hotel Medical Service",
    ],
    availableService: [
      "Emergency Doctor",
      "Hotel Doctor",
      "Ambulance Service",
      "IV Therapy",
      "Food Poisoning Treatment",
      "Ear Infection Treatment",
      "Tourist Medical Assistance",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteInfo.phoneDisplay,
      contactType: "Emergency Medical Assistance",
      availableLanguage: ["English", "Turkish"],
      areaServed: "TR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}