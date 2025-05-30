// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout"
// import Seo from "../components/Seo"
// import HeroSection from "../components/sections/HeroSection"
// import CenteredCTASection from "../components/sections/CenteredCTASection"
// import StatsFeaturesSection from "../components/sections/StatsFeaturesSection"
// import LeadershipSection from "../components/sections/LeadershipSection"
// import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection"

// export default function LandingPage({ data }) {
//   const { pageTitle, headerBanner, seoMetadata, contentSections } =
//     data.contentfulLandingPage

//   return (
//     <Layout>
//       <Seo
//         title={seoMetadata.seoTitle}
//         description={seoMetadata.seoDescription}
//         image={seoMetadata.featuredImage?.gatsbyImageData}
//         canonical={seoMetadata.canonicalUrl}
//         noindex={seoMetadata.noindex}
//         nofollow={seoMetadata.nofollow}
//       />

//       <HeroSection banner={headerBanner} />

//       {contentSections.map(section => {
//         switch (section.sectionType) {
//           case "CenteredCTA":
//             return <CenteredCTASection key={section.internalName} {...section} />
//           case "StatsFeatures":
//             return <StatsFeaturesSection key={section.internalName} {...section} />
//           case "Leadership":
//             return <LeadershipSection key={section.internalName} {...section} />
//           case "FeaturedProjects":
//             return <FeaturedProjectsSection key={section.internalName} {...section} />
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
//         canonicalUrl
//         noindex
//         nofollow
//         featuredImage {
//           description
//           gatsbyImageData(layout: FULL_WIDTH)
//         }
//       }

//       contentSections {
//         __typename

//         ... on ContentfulPageSection {
//           internalName
//           sectionType
//           heading
//           subheading
//           body { raw }
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
//             body { raw }
//           }

//           people {
//             internalName
//             name
//             title
//             bio { raw }
//             photo { gatsbyImageData(width: 200, height: 200) }
//             email
//             phone
//           }

//           projects {
//             internalName
//             title
//             units
//             location
//             heroImage { gatsbyImageData(layout: FULL_WIDTH) }
//           }
//         }
//       }
//     }
//   }
// `
// `
