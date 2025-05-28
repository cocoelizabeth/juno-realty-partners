import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  HeaderContainer,
  Inner,
  LogoLink,
  Nav,
  NavList,
  NavItem,
  NavLink,
  MobileToggle,
} from "../styles/HeaderStyles"

import { MdMenu, MdClose } from "react-icons/md"
import { GatsbyImage } from "gatsby-plugin-image"

const MOBILE_BREAKPOINT = 768

export default function Header() {
  // Toogle mobile menu state
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Close menu when viewport crosses above the breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > MOBILE_BREAKPOINT && open) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [open])

  // On scroll, flip isScrolled when you’ve moved down
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const { navigation } = useStaticQuery(graphql`
    query HeaderNavigation {
      navigation: allContentfulNavigation(
        filter: { menuName: { eq: "main" } }
      ) {
        nodes {
          logo {
            description
            gatsbyImageData
          }
          alternateLogo {
            description
            gatsbyImageData
          }
          links {
            ... on ContentfulLandingPage {
              slug
              pageTitle
            }
          }
        }
      }
    }
  `)

  const nav = navigation.nodes[0] || { links: [] }

  // logic for getting logo based on scroll position
  const initialLogo = nav.logo.gatsbyImageData
  const scrolledLogo = nav.alternateLogo.gatsbyImageData || initialLogo
  const initialAltText = nav.logo.description || "Juno Realty Partners Logo LLC"
  const scrolledAltText = nav.alternateLogo.description || initialAltText

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Inner>
        <LogoLink to="/" isScrolled={isScrolled}>
          <GatsbyImage
            image={isScrolled ? scrolledLogo : initialLogo}
            alt={isScrolled ? initialAltText : scrolledAltText}
            className="header-logo"
          />
        </LogoLink>

        <MobileToggle
          open={open}
          isScrolled={isScrolled}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <MdClose /> : <MdMenu />}
        </MobileToggle>

        <Nav open={open}>
          <NavList>
            {nav.links.map(link => {
              // make sure slug starts with "/"
              let path = link.slug.startsWith("/")
                ? link.slug
                : `/${link.slug}`
              // if this is your “home” entry, force it to be "/"
              if (
                link.slug === "home" ||
                link.pageTitle.toLowerCase() === "home"
              ) {
                path = "/"
              }
              return (
                <NavItem key={link.slug}>
                  <NavLink
                    to={path}
                    activeClassName="active"
                    onClick={() => setOpen(false)}
                    isScrolled={isScrolled}
                  >
                    {link.pageTitle}
                  </NavLink>
                </NavItem>
              )
            })}
          </NavList>
        </Nav>
      </Inner>
    </HeaderContainer>
  )
}
