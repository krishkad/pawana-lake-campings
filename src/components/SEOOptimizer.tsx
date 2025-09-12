"use client"
import { useEffect } from 'react';

interface SEOOptimizerProps {
  pageType: 'homepage' | 'blog-list' | 'blog-post';
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
}

const SEOOptimizer = ({ pageType, title, description, keywords, canonicalUrl }: SEOOptimizerProps) => {
  useEffect(() => {
    // Add breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": getBreadcrumbItems(pageType)
    };

    // Add FAQ structured data for blog posts
    const faqData = pageType === 'blog-post' ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": getFAQItems()
    } : null;

    // Add local business structured data
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "Pawana Lake Resort",
      "description": "Luxury camping resort at Pawana Lake, Maharashtra offering unique outdoor experiences",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lonavala",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.7402",
        "longitude": "73.4027"
      },
      "telephone": "+91-9373526309",
      "priceRange": "₹999",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Luxury Tents" },
        { "@type": "LocationFeatureSpecification", "name": "Lakeside Camping" },
        { "@type": "LocationFeatureSpecification", "name": "Adventure Activities" },
        { "@type": "LocationFeatureSpecification", "name": "BBQ Facilities" }
      ]
    };

    // Inject structured data
    const scripts = document.querySelectorAll('script[type="application/ld+json"][data-seo-optimizer]');
    scripts.forEach(script => script.remove());

    [breadcrumbData, faqData, localBusinessData].filter(Boolean).forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-optimizer', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    // Add performance and SEO meta tags
    const metaTags = [
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'theme-color', content: '#059669' },
      { name: 'msapplication-TileColor', content: '#059669' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: pageType === 'blog-post' ? 'article' : 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@PawanaLakeResort' }
    ];

    // Remove existing SEO optimizer meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo-optimizer]');
    existingMetas.forEach(meta => meta.remove());

    // Add new meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      meta.setAttribute('data-seo-optimizer', 'true');
      document.head.appendChild(meta);
    });

  }, [pageType, title, description, keywords, canonicalUrl]);

  return null;
};

const getBreadcrumbItems = (pageType: string) => {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": window.location.origin
    }
  ];

  if (pageType === 'blog-list' || pageType === 'blog-post') {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": `${window.location.origin}/blog`
    });
  }

  if (pageType === 'blog-post') {
    items.push({
      "@type": "ListItem",
      "position": 3,
      "name": document.title.replace(' | Pawana Lake Resort', ''),
      "item": window.location.href
    });
  }

  return items;
};

const getFAQItems = () => {
  const commonFAQs = [
    {
      "@type": "Question",
      "name": "What is the best time to visit Pawana Lake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best time to visit Pawana Lake is during the monsoon season (June to September) and winter months (October to February) when the weather is pleasant and the lake is full."
      }
    },
    {
      "@type": "Question",
      "name": "What activities are available at Pawana Lake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pawana Lake offers camping, kayaking, boating, trekking to nearby forts, stargazing, bonfires, and various water sports activities."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Pawana Lake from Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pawana Lake is approximately 110 kilometers from Mumbai, taking about 2-3 hours by road depending on traffic conditions."
      }
    }
  ];

  return commonFAQs;
};

export default SEOOptimizer;