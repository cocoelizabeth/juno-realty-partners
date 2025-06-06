import React from "react"
import { HeaderBannerStyles } from "../styles/HeaderBannerStyles"
import { GatsbyImage } from "gatsby-plugin-image"

const HeaderBanner = data => {
  const heroImage = data.banner.heroImage.gatsbyImageData
  const heroImageAltText = data.banner.heroImage.description || data.banner.heading
  const heading = data.banner.heading
  // const footnote = data.banner.footnote || ""

  return (
    <HeaderBannerStyles>
      {/* <p>Contact us at hello@junorp.com</p>
           <p>© {new Date().getFullYear()} Juno Realty Partners</p> */}

      <GatsbyImage
        image={heroImage}
        alt={heroImageAltText}
        loading="eager"
        className="hero-image-container"
        imgClassName="hero-image"
      />
      <div className="image-overlay"></div>
        <div className="heading-container">
          <h1 className="hero-heading">{heading}</h1>
        </div>

        {/* <div className="footnote-container">
          <p className="footnote">{footnote}</p>
        </div> */}
    

    </HeaderBannerStyles>
  )
}

export default HeaderBanner
