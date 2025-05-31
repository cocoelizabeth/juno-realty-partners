// src/styles/FooterStyles.jsx
import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  background: var(--color-dark);
  font-size: 15px;
  width: 100%;
  padding-top: var(--space-lg);
  color: var(--color-light);
  padding:var(--space-xl) 0;
   

  font-weight: 300;

  .line-break {
    height: .5px;
    background-color: var(--color-light);
  }

  .copyright {
    font-size: var(--font-size-sm);
    /* margin-top: var(--space-gap); */
    text-align: center;
    line-height: 1;
   
  }

`

export const InnerFooter = styled.div`
  max-width: var(--max-width);
  margin:0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  /* margin-bottom: 40px; */
     padding: var(--nav-padding);
     padding: 0 var(--section-side-padding);
    
`

export const LogoLink = styled(Link)`
  .footer-logo {}

  .footer-logo img {
    object-fit: contain;
    height: 50px;
    width: auto;
  }
`

export const LogoAndCTA = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const CtaText = styled.div`
  font-size: 1.3rem;
  font-weight: var(--font-weight-regular);
  opacity: 0.8;
  color: var(--color-light);
  max-width: 455px;
  @media only screen and (min-width: 768px) {
    max-width: 50%;
  }

  @media only screen and (min-width: 768px) {
    max-width: 45%;
  }
`

export const NavLinksAndContact = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
    @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    .contact-items-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  @media only screen and (min-width: 768px) {
   .contact-items-container{
      width: 45%;
  }
`
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  display: none;
  @media only screen and (min-width: 768px) {
    display: inline-flex;
  }
`
export const NavItem = styled.li`
  margin-bottom: 3px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--color-light);
  &:hover {
    opacity: 0.5;
  }
`
export const ContactItem = styled.div`
  line-height: 1.7;
  /* margin-bottom: 3px; */
  padding-bottom: 5px;
  font-size: 16px;

  .contact-info-heading {
    font-weight: var(--font-weight-semi-bold);
    margin-right: var(--space-gap);
    border-bottom: none;
    opacity: 0.8;
  }
  .contact-info {
    font-weight: 300;
    padding-bottom: 2px;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 5px;
    color: var(--color-light);
    &:hover {
      opacity: 0.5;
    }
  }
`
