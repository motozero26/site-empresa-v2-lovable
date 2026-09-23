import { useEffect } from "react";
import { companyConfig } from "@/config/company";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    datePublished?: string;
    dateModified?: string;
    author?: string;
    authorName?: string;
    section?: string;
    headline?: string;
    description?: string;
  };
  service?: {
    serviceType: string;
    description: string;
  };
}

export const SEO = ({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  ogImage = "https://www.mwtechs.com.br/og-image.png",
  breadcrumbs,
  faqs,
  article,
  service,
}: SEOProps) => {
  const canonicalUrl =
    !canonicalPath || canonicalPath === "/"
      ? `${companyConfig.website}/`
      : `${companyConfig.website}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`.replace(/\/+$/, "");

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or create meta tags
    const setMetaTag = (attr: "name" | "property", key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard Meta
    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // OpenGraph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", companyConfig.tradeName);
    setMetaTag("property", "og:locale", "pt_BR");
    setMetaTag("property", "og:image", ogImage);

    // Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 3. Inject Structured Data JSON-LD
    const schemas: object[] = [];

    // LocalBusiness / ComputerStore
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ComputerStore",
      "@id": `${companyConfig.website}/#localbusiness`,
      name: companyConfig.tradeName,
      alternateName: companyConfig.name,
      url: companyConfig.website,
      logo: `${companyConfig.website}/favicon.png`,
      image: `${companyConfig.website}/favicon.png`,
      description: companyConfig.description,
      telephone: companyConfig.phone,
      email: companyConfig.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${companyConfig.address.street}, ${companyConfig.address.neighborhood}`,
        addressLocality: companyConfig.address.city,
        addressRegion: companyConfig.address.state,
        postalCode: companyConfig.address.postalCode,
        addressCountry: companyConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -5.8778, // Ponta Negra, Natal - RN
        longitude: -35.1764,
      },
      areaServed: companyConfig.serviceArea.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
      openingHoursSpecification: companyConfig.openingHoursSpecification.map((spec) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: spec.dayOfWeek,
        opens: spec.opens,
        closes: spec.closes,
      })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: companyConfig.phone,
        contactType: "customer service",
        availableLanguage: ["Portuguese"],
      },
    });

    // Breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url.startsWith("http") ? item.url : `${companyConfig.website}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
        })),
      });
    }

    // FAQPage
    if (faqs && faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    }

    // Service
    if (service) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.serviceType,
        description: service.description,
        provider: {
          "@type": "ComputerStore",
          name: companyConfig.tradeName,
          url: companyConfig.website,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: companyConfig.address.city,
        },
      });
    }

    // Article
    if (article) {
      const pubDate = article.publishedTime || article.datePublished || "2025-01-01T08:00:00+00:00";
      const modDate = article.modifiedTime || article.dateModified || new Date().toISOString();
      const author = article.author || article.authorName || "Equipe Técnica MWTechs";

      schemas.push({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: article.headline || title,
        description: article.description || description,
        url: canonicalUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        image: ogImage || `${companyConfig.website}/og-image.png`,
        author: {
          "@type": "Organization",
          name: author,
          url: companyConfig.website,
        },
        publisher: {
          "@type": "Organization",
          name: companyConfig.tradeName,
          logo: {
            "@type": "ImageObject",
            url: `${companyConfig.website}/og-image.png`,
          },
        },
        datePublished: pubDate,
        dateModified: modDate,
      });
    }

    // Remove existing dynamic json-ld script
    const existingScript = document.getElementById("seo-dynamic-jsonld");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "seo-dynamic-jsonld";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      // Cleanup script on unmount
      const scriptToRemove = document.getElementById("seo-dynamic-jsonld");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, breadcrumbs, faqs, article, service]);

  return null;
};
