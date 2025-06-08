import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
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
  // Get current route/pathname
  const {pathname } = useLocation();
 // Decide which paths have white backgrounds and should be “always scrolled from the start” 
 // ( “/404” and anything under “/projects/”)
  const alwaysBlackPaths = ["/404"]
  const isCaseStudyPage = pathname.startsWith("/projects/")
  const forceBlack = alwaysBlackPaths.includes(pathname) || isCaseStudyPage
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

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
    // Clean up on unmount too
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
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
            gatsbyImageData(placeholder: NONE)
          }
          alternateLogo {
            description
            gatsbyImageData(placeholder: NONE)
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

  const initialLogo = nav.logo.gatsbyImageData
  const initialAltText = nav.logo.description || "Juno Realty Partners Logo LLC"


  return (
    <HeaderContainer isScrolled={isScrolled} forceBlack={forceBlack}>
      <Inner>
        <LogoLink to="/" isScrolled={isScrolled} forceBlack={forceBlack}>
          <GatsbyImage
            image={initialLogo}
            alt={initialAltText}
            className="header-logo"
            loading="eager"
          />
        </LogoLink>

        <MobileToggle
          open={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <MdClose /> : <MdMenu />}
        </MobileToggle>

        <Nav open={open}>
          <NavList>
            {nav.links.map(link => {
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
                  <NavLink
                    to={path}
                    activeClassName="active"
                    onClick={() => setOpen(false)}
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
