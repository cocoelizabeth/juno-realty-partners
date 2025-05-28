import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderBanner from "../components/HeaderBanner"

export default function LandingPage({ data }) {
  const landingPage = data.contentfulLandingPage
  const seoMetadata = data.contentfulLandingPage.seoMetadata

  return (
    <Layout>
      {/* <Seo
        title={seoMetadata.seoTitle}
        description={seoMetadata.seoDescription}
        image={seoMetadata.featuredImage?.gatsbyImageData}
        canonical={seoMetadata.canonicalUrl}
        noindex={seoMetadata.noindex}
        nofollow={seoMetadata.nofollow}
      /> */}

      <HeaderBanner banner={landingPage.headerBanner} />
      {/* <HeaderBanner banner={landingPage.headerBanner} />
      <HeaderBanner banner={landingPage.headerBanner} /> */}
      <main>{/* render landingPage.fields here */}</main>
    </Layout>
  )
}

export const query = graphql`
  query LandingPageBySlug($slug: String!) {
    contentfulLandingPage(slug: { eq: $slug }) {
      pageTitle
      headerBanner {
        heading
        footnote
        heroImage {
          description
          gatsbyImageData (layout: FULL_WIDTH)
        }
      }
      seoMetadata {
        seoTitle
        seoDescription
        featuredImage {
          description
          gatsbyImageData
        }
        noindex
        nofollow
      }
    }
  }
`
