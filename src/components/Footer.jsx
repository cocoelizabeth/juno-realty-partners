// src/components/Footer.jsx
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  FooterWrapper,
  InnerFooter,
  LogoAndCTA,
  LogoLink,
  NavList,
  NavItem,
  NavLink,
  NavLinksAndContact,
  CtaText,
  ContactItem,
} from "../styles/FooterStyles"


export default function Footer() {
  // run your Contentful query
  const { contentfulFooter } = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        ctaText
        contactPhone
        contactEmail
        logoAndNavLinks {
          logo {
            description
            gatsbyImageData(placeholder: NONE)
          }
          links {
            pageTitle
            slug
          }
        }
      }
    }
  `)

  // pull out the fields you need
  const ctaText = contentfulFooter.ctaText
  const contactPhone = contentfulFooter.contactPhone
  const contactEmail = contentfulFooter.contactEmail
  const footerLogo = contentfulFooter.logoAndNavLinks.logo.gatsbyImageData
  const footerLogoAltText = contentfulFooter.logoAndNavLinks.logo.description
  const footerNavLinks = contentfulFooter.logoAndNavLinks.links

  // **This is the critical part**: you must `return` your JSX.
  return (
    <FooterWrapper>
      <InnerFooter>
        <LogoAndCTA>
          <LogoLink to="/">
            <GatsbyImage
              image={footerLogo}
              alt={footerLogoAltText}
              className="footer-logo"
              objectFit="contain"
              height="50px"
            />
          </LogoLink>
          <CtaText>
            {ctaText}
          </CtaText>
        </LogoAndCTA>
        <NavLinksAndContact>
          <NavList>
            {footerNavLinks.map(link => {
              // make sure slug starts with "/"
              let path = link.slug.startsWith("/") ? link.slug : `/${link.slug}`
              // if this is your “home” entry, force it to be "/"
              if (
                link.slug === "home" ||
                link.pageTitle.toLowerCase() === "home"
              ) {
                path = "/"
              }

              return (
                <NavItem key={link.slug}>
                  <NavLink to={path}>{link.pageTitle}</NavLink>
                </NavItem>
              )
            })}
          </NavList>
          <div className="contact-items-container">
          <ContactItem>
            <span className="contact-info-heading">Email:</span>
            <a className="contact-info"  href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </ContactItem>
                      <ContactItem>
            <span className="contact-info-heading">Phone:</span>
            <a className="contact-info" href={`tel:${contactPhone}`}>{contactPhone}</a>
          </ContactItem>
          </div>

        </NavLinksAndContact>
                  <div className="line-break"></div>
        <p className="copyright">© {new Date().getFullYear()} Juno Realty Partners</p>
      
      </InnerFooter>

    </FooterWrapper>
  )
}
