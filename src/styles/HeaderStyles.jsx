// src/styled/HeaderStyles.jsx
import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  /* ➊ switch from transparent → white */
  background-color: ${props =>
    props.isScrolled ? "var(--color-light)" : "transparent"};
  transition: background-color 0.3s ease;
`

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--nav-padding);
  /* padding: 20px 30px; */
  //here
`

export const LogoLink = styled(Link)`
  display: inline-block;

  .header-logo {
    height: var(--logo-height);
    width: auto;
    min-width: 107px;
    /* margin: 17px 0; */
    div {
      height:var(--logo-height);
      width: auto;
      img {
         height:var(--logo-height);
         width: auto;
      }
    }
    picture {
      height: var(--logo-height);
      width: auto;
      img {
        height: var(--logo-height);
        width: auto;
      }
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    /* max-width: 80vw; */
    width: 100vw;
    background: var(--color-dark);
    flex-direction: column;
    padding-top: var(--space-lg);
    color: var(--color-light);
    transform: translateX(${props => (props.open ? "0" : "100%")});
    // only animate when we’re opening
    transition: transform ${props => (props.open ? `0.3s` : `0s`)} ease;
  }
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: var(--space-lg);

  @media (max-width: 767px) {
    flex-direction: column;
    gap: var(--space-lg);
    height: 100%;
    padding: var(--space-lg);
    padding-top: 0;
    margin-top: var(--nav-height);
  }
`

export const NavItem = styled.li``

export const NavLink = styled(Link)`
  color: ${props =>
    props.isScrolled ? "var(--color-dark)" : "var(--color-light)"};
  /* transition: fill 0.3s ease; */
  text-decoration: none;
  &.active {
    font-weight: var(--font-weight-semi-bold);
  }
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 767px) {
    color: var(--color-light);
    font-size: var(--font-size-xl);
    margin: var(--space-lg);
    text-decoration: none;
    font-family: var(--font-heading);
    font-weight: var(--font-weight-light);
    font-weight: 300;
   
    &.active {
      border-bottom: 2px solid white;
      text-decoration: none;
      font-weight: var(--font-weight-light);
    }
  }
`

export const MobileToggle = styled.button`
  display: none;
  @media (max-width: 767px) {
    display: block;
    background: none;
    border: none;
    color: var(--color-dark);
    font-size: 1.5rem;
    z-index: 1000;
    // hambuger menu is only black when the menu isScrolled and is notOpen
    color: ${props =>
      props.isScrolled && !props.open ? "var(--color-dark)" : "var(--color-light)"};
  }
`



