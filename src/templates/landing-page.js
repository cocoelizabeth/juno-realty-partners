import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderBanner from "../components/HeaderBanner"
import CenteredCTASection from "../components/sections/CenteredCTASection"
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection"
import WhyLandownersChooseUsSection from "../components/sections/WhyLandownersChooseUsSection"
import QuoteSingularBlock from "../components/quotes/QuoteSingular"
import StatsFeaturesSection from "../components/sections/StatsFeaturesSection"
import LeadershipSection from "../components/sections/LeadershipSection"
import AccordionSection from "../components/sections/AccordionSection"
import QuoteSliderSection from "../components/sections/QuoteSliderSection"
import ProjectGridSection from "../components/sections/ProjectGridSection"
import ContactTextSection from "../components/sections/ContactTextSection"

export default function LandingPage({ data, pageContext }) {
  const currentSlug = pageContext.slug
  const seoMetadata = pageContext.seoMetadata

  const { pageTitle, headerBanner, contentSections } =
    data.contentfulLandingPage


  const isHome = currentSlug === "home"
  const crumbs = isHome
    ? [] // no breadcrumbs on the homepage
    : [
        { name: "Home", url: "/" },
        { name: pageTitle, url: `/${currentSlug}/` },
      ]


  return (
    <Layout>
      <Seo
        title={seoMetadata.title}
        description={seoMetadata.description}
        ogMetaDescription={seoMetadata.ogMetaDescription}
        image={seoMetadata.image}
        canonical={seoMetadata.canonical}
        noindex={seoMetadata.noindex}
        nofollow={seoMetadata.nofollow}
        breadcrumbs={crumbs}
        preloadImage={headerBanner?.heroImage.gatsbyImageData.images.fallback.src}
      />

      <HeaderBanner banner={headerBanner} />

      {contentSections.map(section => {
        switch (section.sectionType) {
          case "CenteredCTA":
            return (
              <CenteredCTASection
                key={section.internalName}
                heading={section.heading || ""}
                // subheading={section.subheading || ""}
                body={section.body}
                ctaText={section.ctaText || ""}
                ctaUrl={section.ctaUrl || ""}
                currentSlug={pageContext.slug}
              />
            )
          case "FeaturedProjects":
            return (
              <FeaturedProjectsSection
                key={section.internalName}
                sectionHeading={section.heading}
                showHeading={currentSlug !== "portfolio"}
                projects={section.projects}
                currentSlug={pageContext.slug}
                ctaText={section.ctaText}
                ctaUrl={section.ctaUrl || ""}
                showCTA={currentSlug !== "portfolio"}
                showDisclaimer={currentSlug === "portfolio"}
                disclaimer={section.statsDisclaimer}
              />
            )
          case "WhyLandownersChooseUs":
            return (
              <WhyLandownersChooseUsSection
                key={section.internalName}
                sectionHeading={section.heading}
                reasonFeatures={section.features}
                stats={section.stats}
                statsDisclaimer={section.statsDisclaimer}
              />
            )
          case "QuoteSingular":
            return (
              <QuoteSingularBlock
                key={section.quotes[0].internalName}
                body={section.quotes[0].body}
                speaker={section.quotes[0].speaker}
                type={section.quotes[0].type}
              />
            )
          case "QuoteSlider":
            return (
              <QuoteSliderSection
                key={section.internalName}
                quotes={section.quotes}
                sectionHeading={section.heading}
              />
            )
          case "Accordion":
            return (
              <AccordionSection
                key={section.internalName}
                features={section.features}
                sectionHeading={section.heading}
              />
            )

          case "StatsFeatures":
            return (
              <StatsFeaturesSection
                key={section.internalName}
                stats={section.stats}
                statsDisclaimer={section.statsDisclaimer}
              />
            )

          case "Leadership":
            return (
              <LeadershipSection
                key={section.internalName}
                sectionHeading={section.heading}
                people={section.people}
              />
            )
          case "ProjectGrid":
            return (
              <ProjectGridSection
                key={section.internalName}
                projects={section.projects}
              />
            )
          case "ContactText":
            return (
              <ContactTextSection
                key={section.internalName}
                heading={section.heading || ""}
                // subheading={section.subheading || ""}
                body={section.body}
                ctaText={section.ctaText || ""}
                ctaUrl={section.ctaUrl || ""}
                currentSlug={pageContext.slug}
              />
            )

          default:
            return null
        }
      })}
    </Layout>
  )
}

export const query = graphql`
  query LandingPageBySlug($slug: String!) {
    contentfulLandingPage(slug: { eq: $slug }) {
      pageTitle
      headerBanner {
        heading
        heroImage {
          description
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            breakpoints: [375, 768, 1024, 1440]
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      contentSections {
        __typename
        ... on ContentfulPageSection {
          internalName
          sectionType
          heading
          body {
            raw
          }
          ctaText
          ctaUrl

          stats {
            internalName
            label
            value
          }
          statsDisclaimer

          features {
            internalName
            heading
            body {
              raw
            }
          }
          quotes {
            internalName
            body {
              raw
            }
            speaker
            style
          }
          people {
            internalName
            name
            title
            phone
            email
            bio {
              raw
            }
            photo {
              description
              gatsbyImageData(
                aspectRatio: 0.8125
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }

          projects {
            __typename
            ... on ContentfulProject {
              title
              featuredProject
              units
              location
              status
              type
              role
              heroImage {
                description
                gatsbyImageData (
                 aspectRatio: 1.197
                 placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                )
              }
            }

            ... on ContentfulCaseStudy {
              internalName
              projectNameForCaseStudy
              caseStudyTitle
              slug
              project {
                heroImage {
                  description
                  gatsbyImageData (
                    formats: [AUTO, WEBP, AVIF]
                    placeholder: BLURRED
                  )
                }
                type
                units
                location
                featuredProject
              }
            }
          }
        }
      }
    }
  }
`
