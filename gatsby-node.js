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
        }
      }
    }
  `)

  if (landingResult.errors) {
    reporter.panic("Error loading landing pages", landingResult.errors)
    return
  }

  landingResult.data.allContentfulLandingPage.nodes.forEach(({ slug }) => {
    const pagePath = slug === "home" ? "/" : `/${slug}/`
    createPage({
      path: pagePath,
      component: path.resolve("./src/templates/landing-page.js"),
      context: { slug },
    })
  })

  // ─── 2) Generate Case Study Pages ────────────────────────────────────────────
  const caseStudiesResult = await graphql(`
    {
      allContentfulCaseStudy {
        nodes {
          slug
        }
      }
    }
  `)

  if (caseStudiesResult.errors) {
    reporter.panic("Error loading Case Studies", caseStudiesResult.errors)
    return
  }

  const caseStudies = caseStudiesResult.data.allContentfulCaseStudy.nodes
  caseStudies.forEach((cs) => {
    createPage({
      path: `/projects/${cs.slug}/`,
      component: path.resolve("./src/templates/case-study-page.js"),
      context: { slug: cs.slug },
    })
  })
}
