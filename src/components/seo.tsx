import Script from "next/script"
import companyData from "@/data/company.json"

export function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyData.name,
    "url": companyData.websiteUrl,
    "logo": `${companyData.websiteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyData.contacts.phone,
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": "Russian"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyData.contacts.address,
      "addressLocality": "Тамбов",
      "addressRegion": "Тамбовская область",
      "postalCode": "392000",
      "addressCountry": "RU"
    }
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
