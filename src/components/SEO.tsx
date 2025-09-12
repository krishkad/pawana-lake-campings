"use client";
import { useEffect, useState } from "react";
import SEOOptimizer from "./SEOOptimizer";
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  pageType?: "homepage" | "blog-list" | "blog-post";
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "article",
  publishedTime,
  modifiedTime,
  author,
  tags,
  pageType = "blog-post",
}: SEOProps) => {
  // const siteUrl = window.location.origin;
  // const fullUrl = url ? `${siteUrl}${url}` : window.location.href;
  // const fullImageUrl = image?.startsWith('http') ? image : `${siteUrl}${image}`;

  const [fullUrl, setFullUrl] = useState<string | null>(null);
  const [fullImageUrl, setFullImageUrl] = useState<string | null>(null);
  const [siteUrl, setSiteUrl] = useState<string | null>(null);

  useEffect(() => {
    const siteUrl = window.location.origin;
    const resolvedUrl = url ? `${siteUrl}${url}` : window.location.href;
    const resolvedImage = image?.startsWith("http")
      ? image
      : `${siteUrl}${image}`;

    setFullUrl(resolvedUrl);
    setFullImageUrl(resolvedImage);
    setSiteUrl(siteUrl);
  }, [url, image]);

  // Enhanced structured data with more SEO elements
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: {
      "@type": "ImageObject",
      url: fullImageUrl,
      width: 1200,
      height: 630,
    },
    url: fullUrl,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Person",
      name: author || "Pawana Lake Resort",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Pawana Lake Resort",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 300,
        height: 100,
      },
      url: siteUrl,
      sameAs: [
        "https://facebook.com/pawanalakeresort",
        "https://instagram.com/pawanalakeresort",
        "https://twitter.com/pawanalakeresort",
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
    keywords: keywords.join(", "),
    articleSection: "Travel & Tourism",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    wordCount: description.split(" ").length * 10, // Approximate word count
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".blog-content h1", ".blog-content h2", ".blog-content p"],
    },
  };

  // Enhanced meta title with better SEO structure
  const enhancedTitle = `${title} | Pawana Lake Resort - Maharashtra's Premier Camping Destination`;

  // Enhanced description with location and CTA
  const enhancedDescription = `${description} Located at Pawana Lake, Maharashtra. Book your luxury camping experience today!`;

  return (
    <>
      <Head>
        {/* Enhanced Basic Meta Tags */}
        <title>{enhancedTitle}</title>
        <meta name="description" content={enhancedDescription} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content={author || "Pawana Lake Resort"} />

        {/* Geographic SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta
          name="geo.placename"
          content="Pawana Lake, Lonavala, Maharashtra"
        />
        <meta name="geo.position" content="18.7402;73.4027" />
        <meta name="ICBM" content="18.7402, 73.4027" />

        {/* Enhanced Open Graph Tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={enhancedDescription} />
        <meta property="og:image" content={fullImageUrl ? fullImageUrl : ""} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={`${title} - Pawana Lake Resort`}
        />
        <meta property="og:url" content={fullUrl ? fullUrl : ""} />
        <meta property="og:site_name" content="Pawana Lake Resort" />
        <meta property="og:locale" content="en_US" />
        {publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {modifiedTime && (
          <meta property="article:modified_time" content={modifiedTime} />
        )}
        {author && <meta property="article:author" content={author} />}
        {tags &&
          tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}

        {/* Enhanced Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PawanaLakeResort" />
        <meta name="twitter:creator" content="@PawanaLakeResort" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl ? fullImageUrl : ""} />
        <meta
          name="twitter:image:alt"
          content={`${title} - Pawana Lake Resort`}
        />

        {/* Additional SEO Tags */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={fullUrl ? fullUrl : ""} />

        {/* Mobile and App Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="Pawana Lake Resort" />
        <meta name="application-name" content="Pawana Lake Resort" />
        <meta name="theme-color" content="#059669" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <SEOOptimizer
        pageType={pageType}
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={fullUrl ? fullUrl : ""}
      />
    </>
  );
};

export default SEO;
