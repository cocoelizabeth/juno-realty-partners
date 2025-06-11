const path = require("path")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // ─── 1) Generate Landing Pages ───────────────────────────────────────────────
  const landingResult = await graphql(`
    {
      allContentfulLandingPage {
        nodes {
          slug
          contentful_id
          seoMetadata {
            seoTitle
            seoDescription
            ogMetaDescription
            featuredImage {
              description
              gatsbyImageData
            }
            noindex
            nofollow
          }
        }
      }
    }
  `)

  if (landingResult.errors) {
    reporter.panic("Error loading landing pages", landingResult.errors)
    return
  }

  landingResult.data.allContentfulLandingPage.nodes.forEach(
    ({ slug, seoMetadata }) => {
      const pagePath = slug === "home" ? "/" : `/${slug}/`
      createPage({
        path: pagePath,
        component: path.resolve("./src/templates/landing-page.js"),
        context: {
          slug: slug,
          seoMetadata: {
            title: seoMetadata.seoTitle,
            description: seoMetadata.seoDescription,
            ogMetaDescription: seoMetadata.ogMetaDescription,
            image: seoMetadata.featuredImage?.gatsbyImageData,
            canonical: seoMetadata.canonicalUrl,
            noIndex: seoMetadata.noindex,
            nofollow: seoMetadata.nofollow,
          },
        },
      })
    }
  )

  // ─── 2) Generate Case Study Pages ────────────────────────────────────────────
  const caseStudiesResult = await graphql(`
    {
      allContentfulCaseStudy {
        nodes {
          slug
          seoMetadata {
            seoTitle
            seoDescription
            ogMetaDescription
            featuredImage {
              description
              gatsbyImageData
            }
            noindex
            nofollow
          }
        }
      }
    }
  `)

  if (caseStudiesResult.errors) {
    reporter.panic("Error loading Case Studies", caseStudiesResult.errors)
    return
  }

  const caseStudies = caseStudiesResult.data.allContentfulCaseStudy.nodes
  caseStudies.forEach(cs => {

    createPage({
      path: `/projects/${cs.slug}/`,
      component: path.resolve("./src/templates/case-study-page.js"),
      context: { 
        slug: cs.slug,
         seoMetadata: {
            title: cs.seoMetadata.seoTitle,
            description: cs.seoMetadata.seoDescription,
            ogMetaDescription: cs.seoMetadata.ogMetaDescription,
            image: cs.seoMetadata.featuredImage?.gatsbyImageData,
            canonical: cs.seoMetadata.canonicalUrl,
            noIndex: cs.seoMetadata.noindex,
            nofollow: cs.seoMetadata.nofollow,
          },
       },
    })
  })
}
