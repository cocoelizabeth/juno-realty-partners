const React = require("react")

/** @type {import('gatsby').GatsbySSR['onRenderBody']} */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" })


  setHeadComponents([
      <link rel="preconnect" href="https://images.ctfassets.net" key="ctf-preconnect" />,
      <link
      key="preconnect-typekit"
      rel="preconnect"
      href="https://use.typekit.net"
      crossOrigin="anonymous"
    />,
    <link
      key="typekit"
      rel="stylesheet"
      href="https://use.typekit.net/trc4otl.css?display=swap"
    />,
    <meta
      key="format-detection"
      name="format-detection"
      content="address=no"
    />,
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1"
    />,
  ])
}
