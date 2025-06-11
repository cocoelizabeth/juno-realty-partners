// src/templates/caseStudyTemplate.jsx
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {
  PageWrapper,
  Breadcrumbs,
  TitleSection,
  ContentSection,
  CaseStudyContentWrapper,
  GallerySection,
  MoreFeaturedSection,
} from "../styles/case-studies/CaseStudyPageStyles"
import OverviewSection from "../components/case-studies/OverviewSection"
import CaseStudyTextBlock from "../components/case-studies/CaseStudyTextBlock"
import FeaturedProjectItem from "../components/case-studies/FeaturedProjectItem"
import CaseStudyGallery from "../components/case-studies/CaseStudyGallery"

export default function CaseStudyPage({ data, pageContext }) {
  const currentSlug = pageContext.slug // comment back in if needed
  const seoMetadata = pageContext.seoMetadata
  const cs = data.contentfulCaseStudy
  const {
    caseStudyTitle,
    projectNameForCaseStudy,
    otherOverviewFacts,
    openingImage,
    content, // array of CaseStudyTextBlock entries
    gallery, // array of Asset images
    moreFeaturedProjects, // array of other caseStudy entries
  } = cs
  // The connected project data:
  const project = cs.project

  const crumbs = [
    { name: "Portfolio", url: "/portfolio/" },
    { name: projectNameForCaseStudy, url: `/projects/${currentSlug}/` },
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
      />
      <PageWrapper>
        <Breadcrumbs>
          <Link to="/portfolio">PORTFOLIO</Link>
          <p className="featured-projects-bc">{"FEATURED"}</p>
          <p className="current-project-bc">{projectNameForCaseStudy}</p>
        </Breadcrumbs>

        <TitleSection>
          <h1>{projectNameForCaseStudy}</h1>
          <p>{project.location}</p>
        </TitleSection>

        <ContentSection>
          <OverviewSection
            key={projectNameForCaseStudy}
            otherOverviewFacts={otherOverviewFacts}
            projectFacts={project}
            projectNameForCaseStudy={projectNameForCaseStudy}
          ></OverviewSection>

          <CaseStudyContentWrapper>
            <h2 className="case-study-title">{caseStudyTitle}</h2>
            {openingImage && (
              <div className="opening-image">
                <GatsbyImage
                  image={getImage(openingImage.gatsbyImageData)}
                  alt={openingImage.description}
                />
              </div>
            )}

            {content &&
              content.map(block => {
                return (
                  <CaseStudyTextBlock
                    key={block.internalName}
                    content={block}
                  ></CaseStudyTextBlock>
                )
              })}

            {gallery && gallery.length > 0 && (
              <GallerySection>
                <h2>Gallery</h2>
                <CaseStudyGallery gallery={gallery} />
              </GallerySection>
            )}
          </CaseStudyContentWrapper>
        </ContentSection>
      </PageWrapper>

      {moreFeaturedProjects && moreFeaturedProjects.length === 2 && (
        <MoreFeaturedSection>
          <h2>More Featured Projects</h2>
          <div className="cards">
            {moreFeaturedProjects.map(project => (
              <FeaturedProjectItem
                key={project.internalName}
                featuredProject={project}
              />
            ))}
          </div>
        </MoreFeaturedSection>
      )}
    </Layout>
  )
}

export const query = graphql`
  query CaseStudyBySlug($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      caseStudyTitle
      projectNameForCaseStudy
      otherOverviewFacts
      openingImage {
        description
        gatsbyImageData(layout: CONSTRAINED)
      }
      project {
        title
        location
        units
        type
        status
        role
      }
      content {
        __typename
        ... on ContentfulCaseStudyTextBlock {
          internalName
          heading
          body {
            raw
            references {
              __typename
              ... on ContentfulAsset {
                contentful_id
                gatsbyImageData(layout: CONSTRAINED)
                description
              }
              ... on ContentfulQuote {
                contentful_id
                speaker
                style
                body {
                  raw
                }
              }
            }
          }
          quote {
            body {
              raw
            }
            speaker
          }
        }
      }
      gallery {
        description
        gatsbyImageData(layout: CONSTRAINED)
      }
      moreFeaturedProjects {
        slug
        caseStudyTitle
        projectNameForCaseStudy
        project {
          heroImage {
            gatsbyImageData
            description
          }
        }
      }
    }
  }
`
