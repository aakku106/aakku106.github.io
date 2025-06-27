/**
 * Structured Data (JSON-LD) Generator for Adarasha Gaihre's Portfolio
 * This file generates Schema.org structured data for different page types
 * Author: Adarasha Gaihre
 * Updated: 2025-06-27
 *
 * @format
 */

class StructuredDataGenerator {
  constructor() {
    this.baseUrl = "https://www.adarashagaihre.com.np";
    this.personData = {
      "@type": "Person",
      name: "Adarasha Gaihre",
      alternateName: [
        "Aakku",
        "aakku106",
        "Adarasha Gaihre",
        "Adarasha",
        "AdarashaGaihre",
        "Adarasha Gaihre",
        "Aadarsh",
        "Aadarsh Gaihre",
        "Aadarsh Gaire",
        "Adarasha Gaihre 106",
        "Adarasha Gaihre 106",
        "CCN",
        "ccn",
      ],
      description:
        "A web developer with skills in web design, development, and a love for anime.",
      url: this.baseUrl,
      image: {
        "@type": "ImageObject",
        url: `${this.baseUrl}/pictures/pagingpic.jpg`,
        contentUrl: `${this.baseUrl}/pictures/pagingpic.jpg`,
        width: 400,
        height: 400,
        caption: "Profile photo of Adarasha Gaihre",
        encodingFormat: "image/jpeg",
      },
      sameAs: [
        "https://www.linkedin.com/in/adarashaagaihre106/",
        "https://github.com/aakku106",
        "https://x.com/aakku106",
        "https://www.facebook.com/adarasha.gaihre.106/",
        "https://www.facebook.com/aadarasha106/",
        "https://www.instagram.com/adarasha_gaihre/",
        "https://www.pinterest.com/adarashagaihre/",
        "https://www.youtube.com/@AdarashaGaihre",
      ],
      jobTitle: "Student",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Tribhuvan University",
      },
      knowsAbout: [
        "Web Development",
        ".NET",
        "Web Design",
        "Anime",
        "SEO",
        "C# Programming",
        "C++ Programming",
        "C Programming",
        "UI/UX Design",
        "Blazor",
        "Bootstrap",
        "Front-End Development",
        "Back-End Development",
        "Python Programming",
      ],
      email: "mailto:adarasha.gaihre@gmail.com",
      telephone: "+977-000-000-0000",
    };
  }

  /**
   * Generate ProfilePage structured data (for main page)
   */
  generateProfilePage() {
    return {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      dateCreated: "2024-12-23T12:34:00-05:00",
      dateModified: "2025-06-27T14:53:00-05:00",
      description:
        "Learn more about Adarasha Gaihre, a professional portfolio showcasing work in web development, design, and more.",
      mainEntity: this.personData,
      name: "Adarasha Gaihre's Professional Portfolio",
      url: this.baseUrl,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${this.baseUrl}/pictures/pagingpic.jpg`,
        contentUrl: `${this.baseUrl}/pictures/pagingpic.jpg`,
        width: 400,
        height: 400,
        caption: "Profile photo of Adarasha Gaihre",
        encodingFormat: "image/jpeg",
      },
    };
  }

  /**
   * Generate AboutPage structured data
   */
  generateAboutPage() {
    return {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      dateModified: "2025-06-27T14:53:00-05:00",
      description:
        "About Adarasha Gaihre - Learn about my background, skills, education, and passion for web development and anime.",
      mainEntity: this.personData,
      name: "About Adarasha Gaihre",
      url: `${this.baseUrl}/pages/about/index.html`,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${this.baseUrl}/pictures/pagingpic.jpg`,
        contentUrl: `${this.baseUrl}/pictures/pagingpic.jpg`,
        width: 400,
        height: 400,
        caption: "Profile photo of Adarasha Gaihre",
        encodingFormat: "image/jpeg",
      },
    };
  }

  /**
   * Generate CollectionPage structured data (for portfolio)
   */
  generatePortfolioPage() {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      dateModified: "2025-06-27T14:53:00-05:00",
      description:
        "Adarasha Gaihre's portfolio showcasing web development projects, applications, and creative works.",
      mainEntity: this.personData,
      name: "Adarasha Gaihre's Portfolio",
      url: `${this.baseUrl}/pages/portfolio/index.html`,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${this.baseUrl}/pictures/pagingpic.jpg`,
        contentUrl: `${this.baseUrl}/pictures/pagingpic.jpg`,
        width: 400,
        height: 400,
        caption: "Profile photo of Adarasha Gaihre",
        encodingFormat: "image/jpeg",
      },
    };
  }

  /**
   * Generate ContactPage structured data
   */
  generateContactPage() {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      dateModified: "2025-06-27T14:53:00-05:00",
      description:
        "Contact Adarasha Gaihre - Get in touch for web development projects, collaborations, or general inquiries.",
      mainEntity: this.personData,
      name: "Contact Adarasha Gaihre",
      url: `${this.baseUrl}/pages/contact/index.html`,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${this.baseUrl}/pictures/pagingpic.jpg`,
        contentUrl: `${this.baseUrl}/pictures/pagingpic.jpg`,
        width: 400,
        height: 400,
        caption: "Profile photo of Adarasha Gaihre",
        encodingFormat: "image/jpeg",
      },
    };
  }

  /**
   * Generate WebPage structured data (for other pages)
   */
  generateWebPage(pageTitle, pageDescription, pageUrl) {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      dateModified: "2025-06-27T14:53:00-05:00",
      description:
        pageDescription || "A page from Adarasha Gaihre's portfolio website.",
      mainEntity: this.personData,
      name: pageTitle || "Adarasha Gaihre",
      url: pageUrl || this.baseUrl,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${this.baseUrl}/pictures/pagingpic.jpg`,
        contentUrl: `${this.baseUrl}/pictures/pagingpic.jpg`,
        width: 400,
        height: 400,
        caption: "Profile photo of Adarasha Gaihre",
        encodingFormat: "image/jpeg",
      },
    };
  }

  /**
   * Insert JSON-LD script into page head
   */
  insertStructuredData(pageType = "profile", customData = {}) {
    let structuredData;

    switch (pageType.toLowerCase()) {
      case "profile":
      case "home":
      case "main":
        structuredData = this.generateProfilePage();
        break;
      case "about":
        structuredData = this.generateAboutPage();
        break;
      case "portfolio":
        structuredData = this.generatePortfolioPage();
        break;
      case "contact":
        structuredData = this.generateContactPage();
        break;
      default:
        structuredData = this.generateWebPage(
          customData.title,
          customData.description,
          customData.url
        );
    }

    // Merge any custom data
    if (Object.keys(customData).length > 0) {
      structuredData = { ...structuredData, ...customData };
    }

    // Create and insert script tag
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData, null, 2);

    // Insert into head
    document.head.appendChild(script);

    console.log("✅ Structured Data inserted:", pageType);
    return structuredData;
  }
}

// Auto-detect page type and insert structured data
document.addEventListener("DOMContentLoaded", function () {
  const generator = new StructuredDataGenerator();

  // Auto-detect page type from URL or meta tags
  let pageType = "profile"; // default
  const currentPath = window.location.pathname.toLowerCase();

  if (currentPath.includes("/about/")) {
    pageType = "about";
  } else if (currentPath.includes("/portfolio/")) {
    pageType = "portfolio";
  } else if (currentPath.includes("/contact/")) {
    pageType = "contact";
  }

  // Insert the structured data
  generator.insertStructuredData(pageType);
});

// Export for manual use if needed
window.StructuredDataGenerator = StructuredDataGenerator;
