/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulLandingPage {
        nodes {
          slug
          contentful_id
        }
      }
    }
  `)

  if (result.errors ) {
    reporter.panic("Error loading landing pages", result.errors)
    return
  }

  result.data.allContentfulLandingPage.nodes.forEach(({ slug }) => {
    // If this is the “home” slug, mount it at '/', otherwise at '/slug/'
    const path = slug === "home" ? "/" : `/${slug}/`
    createPage({
      path: path,
      component: require.resolve ("./src/templates/landing-page.js"),
      context: {
        slug: slug,
      },
    })
  })
}
