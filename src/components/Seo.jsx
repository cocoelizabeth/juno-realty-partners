import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

export default function Seo({
  title,
  description,
  ogMetaDescription,
  image,
  canonical,
  noindex,
  nofollow,
  breadcrumbs = [],
  preloadImage,
  children,
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          logo
        }
      }
    }
  `)

  const { pathname } = useLocation()

  const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, "")

  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${siteUrl}${canonical}`
    : `${siteUrl}${pathname}`

  const defaultTitle = site.siteMetadata?.title // "Juno Realty Partners"
  const seoDescription = description || site.siteMetadata.description
  const ogMetaDescriptionText = ogMetaDescription || description

  const metaImage = image ? image.images.fallback.src : null

  // ——— Build the JSON-LD graph ———
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.siteMetadata.title,
        url: siteUrl,
        logo: `${siteUrl}${site.siteMetadata.logo}`,
      },
      {
        "@type": "WebSite",
        name: site.siteMetadata.title,
        url: siteUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      breadcrumbs.length > 0 && {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${siteUrl}${crumb.url}`,
        })),
      },
    ].filter(Boolean),
  }

  return (
    <Helmet>
      {/* Preload image */}
      <link rel="preconnect" href="https://images.ctfassets.net" crossOrigin />
      {preloadImage && <link rel="preload" as="image" href={preloadImage} />}
     
      {/* Primary tags */}
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={seoDescription} />

      {/* Canonical Tag: always non-www.siteUrl + path */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {(noindex || nofollow) && (
        <meta
          name="robots"
          content={`${noindex ? "noindex" : "index"},${
            nofollow ? "nofollow" : "follow"
          }`}
        />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={defaultTitle ? `${title} | ${defaultTitle}` : title}
      />
      <meta property="og:description" content={ogMetaDescriptionText} />
      {metaImage && <meta property="og:image" content={metaImage} />}

      {metaImage && (
        <meta property="og:image:alt" content={image.description || title} />
      )}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={metaImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={ogMetaDescriptionText} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}

      {/* ——— Structured data ——— */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Any additional tags passed in */}
      {children}
    </Helmet>
  )
}
