import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({
  title,
  description,
  ogMetaDescription,
  image,
  canonical,
  noindex,
  nofollow,
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
        }
      }
    }
  `)


  const defaultTitle = site.siteMetadata?.title // "Juno Realty Partners"
  const seoDescroption = description || site.siteMetadata.description
  const ogMetaDescriptionText = ogMetaDescription || description
 
  const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, "")


  // const metaImage = image
  //   ? `${siteUrl}${image.images.fallback.src}`
  //   : null
      const metaImage = image
    ? image.images.fallback.src
    : null

  return (
    <Helmet>
      {/* Primary tags */}
      <title>
        {defaultTitle ? `${title} | ${defaultTitle}` : title}
      </title>
      <meta name="description" content={seoDescroption} />

      {/* Canonical URL */}
      {canonical && (
        <link
          rel="canonical"
          href={canonical.startsWith("http")
            ? canonical
            : `${siteUrl}${canonical}`}
        />
      )}

      {/* Robots */}
      {(noindex || nofollow) && (
        <meta
          name="robots"
          content={`${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`}
        />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content= {defaultTitle ? `${title} | ${defaultTitle}` : title} />
      <meta property="og:description" content={ogMetaDescriptionText} />
      {metaImage && (
          <meta property="og:image" content={metaImage} />
      )}

      {metaImage && (
              <meta property="og:image:alt" content={image.description || title} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={metaImage ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={ogMetaDescriptionText} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}

      {/* Any additional tags passed in */}
      {children}
    </Helmet>
  )
}
