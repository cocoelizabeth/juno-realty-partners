// src/templates/caseStudyTemplate.jsx
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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

export default function CaseStudyPage({ data }) {
  const cs = data.contentfulCaseStudy

  const {
    caseStudyTitle,
    projectNameForCaseStudy,
    otherOverviewFacts,
    openingImage,
    content, // array of CaseStudyTextBlock entries
    gallery, // array of Asset images
    moreFeaturedProjects, // array of other caseStudy entries
    seoMetadata
  } = cs


  // The connected project data:
  const project = cs.project
  const { title: projectTitle, location, units, type, status, role } = project

  return (
    <Layout>
            <Seo
              title={seoMetadata.seoTitle}
              description={seoMetadata.seoDescription}
              image={seoMetadata.featuredImage?.gatsbyImageData}
              canonical={seoMetadata.canonicalUrl}
              noindex={seoMetadata.noindex}
              nofollow={seoMetadata.nofollow}
            />
      
      <PageWrapper>
        <Breadcrumbs>
          <Link to="/portfolio">PORTFOLIO</Link>
          <p className="featured-projects-bc">{"FEATURED"}</p>
          <p className="current-project-bc">{projectNameForCaseStudy}</p>
        </Breadcrumbs>
        {/* 1. Case Study Title & Location */}
        <TitleSection>
          <h1>{projectNameForCaseStudy}</h1>
          <p>{location}</p>
        </TitleSection>

        <ContentSection>
          <OverviewSection
            key={projectNameForCaseStudy}
            otherOverviewFacts={otherOverviewFacts}
            projectFacts={project}
            projectNameForCaseStudy={projectNameForCaseStudy}
          ></OverviewSection>

          {/* 2. Overview section: pull facts from project + otherOverviewFacts */}

          <CaseStudyContentWrapper>
            <h2 className="case-study-title">{caseStudyTitle}</h2>
            {/* 3. Opening Image */}
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

            {/* GALLERY SECTION BELOW */}
            {gallery && gallery.length > 0 && (
              <GallerySection>
                <h2>Gallery</h2>
                <CaseStudyGallery gallery={gallery}/>
              </GallerySection>
            )}
          </CaseStudyContentWrapper>
        </ContentSection>

      </PageWrapper>

        {/* 6. “More Featured Projects” */}
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
