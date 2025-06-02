// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout"
// import Seo from "../components/Seo"
// import HeaderBanner from "../components/HeaderBanner"
// import CenteredCTASection from "../components/sections/CenteredCTASection"
// import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection"
// import WhyLandownersChooseUsSection from "../components/sections/WhyLandownersChooseUsSection"
// import QuoteSingularBlock from "../components/quotes/QuoteSingular"
// import StatsFeaturesSection from "../components/sections/StatsFeaturesSection"
// import LeadershipSection from "../components/sections/LeadershipSection"
// import AccordionSection from "../components/sections/AccordionSection"
// import QuoteSliderSection from "../components/sections/QuoteSliderSection"
// import ProjectGridSection from "../components/sections/ProjectGridSection"

// export default function LandingPage({ data, pageContext }) {
//   const landingPage = data.contentfulLandingPage
//   //   const seoMetadata = data.contentfulLandingPage.seoMetadata

//   const { pageTitle, headerBanner, seoMetadata, contentSections } =
//     data.contentfulLandingPage

//   const currentSlug = pageContext.slug


//   return (
//     <Layout>
//       {/* <Seo
//         title={seoMetadata.seoTitle}
//         description={seoMetadata.seoDescription}
//         image={seoMetadata.featuredImage?.gatsbyImageData}
//         canonical={seoMetadata.canonicalUrl}
//         noindex={seoMetadata.noindex}
//         nofollow={seoMetadata.nofollow}
//       /> */}

//       <HeaderBanner banner={headerBanner} />

//       {contentSections.map(section => {

//         switch (section.sectionType) {
//           case "CenteredCTA":
//             return (
//               <CenteredCTASection
//                 key={section.internalName}
//                 heading={section.heading || ""}
//                 // subheading={section.subheading || ""}
//                 body={section.body}
//                 ctaText={section.ctaText || ""}
//                 ctaUrl={section.ctaUrl || ""}
//                 currentSlug={pageContext.slug}
//               />
//             )
//           case "FeaturedProjects":
//             return (
//               <FeaturedProjectsSection
//                 key={section.internalName}
//                 sectionHeading={section.heading}
//                 showHeading={currentSlug !== "portfolio"}
//                 projects={section.projects}
//                 currentSlug={pageContext.slug}
//                 ctaText={section.ctaText}
//                 ctaUrl={section.ctaUrl || ""}
//                 showCTA={currentSlug !== "portfolio"}
//               />
//             )
//           case "WhyLandownersChooseUs":
//             return (
//               <WhyLandownersChooseUsSection
//                 key={section.internalName}
//                 sectionHeading={section.heading}
//                 reasonFeatures={section.features}
//                 stats={section.stats}
//                 statsDisclaimer={section.statsDisclaimer}
//               />
//             )
//           case "QuoteSingular":
//             return (
//                 <QuoteSingularBlock
//                     key={section.quotes[0].internalName}
//                     body={section.quotes[0].body}
//                     speaker={section.quotes[0].speaker}
//                     type={section.quotes[0].type}
//                 />
//             )
//           case "QuoteSlider":
//               return (
//                  <QuoteSliderSection
//                   key={section.internalName}
//                   quotes={section.quotes}
//                   sectionHeading={section.heading}
//                  />
//               )
//           case "Accordion":
//               return (
//                 <AccordionSection
//                   key={section.internalName}
//                   features={section.features}
//                   sectionHeading={section.heading}
//                   />
//               )

//             case "StatsFeatures":
//               return (
//                 <StatsFeaturesSection key={
//                 section.internalName} 
//                 stats={section.stats} 
//                 statsDisclaimer={section.statsDisclaimer}
//               />
//               )

//             case "Leadership":
//               return (
//                 <LeadershipSection 
//                   key={section.internalName}
//                   sectionHeading={section.heading}
//                   people={section.people}
//               />
//               )
//             case "ProjectGrid":
//               return (
//                 <ProjectGridSection 
//                   key={section.internalName}
//                   projects={section.projects}
//               />
//               )

//           default:
//             return null
//         }
//       })}
//     </Layout>
//   )
// }

// export const query = graphql`
//   query LandingPageBySlug($slug: String!) {
//     contentfulLandingPage(slug: { eq: $slug }) {
//       pageTitle
//       headerBanner {
//         heading
//         footnote
//         heroImage {
//           description
//           gatsbyImageData(layout: FULL_WIDTH)
//         }
//       }
//       seoMetadata {
//         seoTitle
//         seoDescription
//         featuredImage {
//           description
//           gatsbyImageData
//         }
//         noindex
//         nofollow
//       }
//       contentSections {
//         __typename
//         ... on ContentfulPageSection {
//           internalName
//           sectionType
//           heading
//           body {
//             raw
//           }
//           ctaText
//           ctaUrl

//           stats {
//             internalName
//             label
//             value
//           }
//           statsDisclaimer

//           features {
//             internalName
//             heading
//             body {
//               raw
//             }
//           }
//           quotes {
//             internalName
//             body {raw}
//             speaker
//             style
//           }
//           people {
//             internalName
//             name
//             title
//             phone
//             email
//             bio {
//               raw
//             }
//             photo {
//               description
//               gatsbyImageData (aspectRatio:0.8125 )
//             }
//           }
//           projects {
//             id
//             contentful_id
//             internalName
//             projectNameForCaseStudy
//             caseStudyTitle
//             slug
//             case_study {
//               contentful_id
//             }
//             project {
//               heroImage {
//                 description
//                 gatsbyImageData
//               }
//               type
//               units
//               location
//               featuredProject
//             }
//           }
//         }
//       }
//     }
//   }
// `
