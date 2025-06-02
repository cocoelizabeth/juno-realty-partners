/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")

/** @type {import('gatsby').GatsbySSR['onRenderBody']} */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  // Set the <html lang="en">
  setHtmlAttributes({ lang: "en" })

  // Inject the Adobe Fonts stylesheet link
  setHeadComponents([
    <link
      key="typekit"
      rel="stylesheet"
      href="https://use.typekit.net/trc4otl.css"
    />,
    <meta
      key="format-detection"
      name="format-detection"
      content="address=no"
    />,
  ])
}
