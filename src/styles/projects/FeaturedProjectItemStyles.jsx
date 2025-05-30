import styled from "styled-components"
import { Link } from "gatsby"
import { SecondaryButton } from "../ButtonStyles"

export const FeaturedProjectItemWrapper = styled.article`
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: stretch !important;
  max-width: 100%;
  flex: 1;
  text-align: center;

  &:hover {
    opacity: 0.9;
    transition: opacity 0.3s ease;
    .project-image-wrapper {
      transform: scale(1.1); /* ← zoom in 110% */
    }
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
    /* &:nth-of-type(even) {
      .featured-project-image-wrapper {
        align-self: flex-end;
      }
      .featured-project-text-wrapper {
        align-self: flex-start;
      }
    } */
  }
`

export const ProjectImageLink = styled(Link)`
  display: inline-block;
  width: 100%;
  // here
  display: block;
  overflow: hidden;

  .project-image-wrapper {
    height: 100%;
    // here
    transition: transform 0.4s ease; /* ← animate the zoom */
    transform-origin: center center; /* ← zoom from center */
  }

  &:hover .project-image-wrapper {
    transform: scale(1.1); /* ← zoom in 110% */
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    align-self: flex-start;
    z-index: 2;
  }

  /* @media only screen and (min-width: 928px) {
        width: 80%;
        align-self: flex-start;
        z-index: 2;
    } */

  @media only screen and (min-width: 1024px) {
    width: 100%;
    min-height: 250px;
    height: 250px;
  }
`

export const FeaturedProjectTextWrapper = styled(Link)`
  padding: 30px;
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-size: var(--font-size-lg);
    font-family: var(--font-heading);
    font-weight: var(--font-weight-regular);
    line-height: 1.4;
    margin-bottom: 3px;
  }

  p {
    max-width: 100%;
    margin-bottom: 30px;
    font-size: 15px;
    font-weight: 300;
  }

  p.featured-project-location {}

  p.featured-case-study-title {
    &:after {
      content: "→";
      margin-left: 5px;
      display: inline-block;
      transition: transform 0.3 ease;
    }
  }

  & ${SecondaryButton} {
    margin-top: auto;
    width: 100%;
    border-bottom: none;
    display: flex;
    justify-content: center;
    div {
      width: fit-content;
      border-bottom: 1px solid white;
    }
  }
  @media only screen and (min-width: 480px) {
    p.featured-case-study-title {
      max-width: 300px;
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }

  @media only screen and (min-width: 768px) {
    p.featured-case-study-title {
      max-width: 500px;
      /* margin: 0 auto;
        margin-bottom: 30px; */
    }
  }

  /* @media only screen and (min-width: 768px) {
    width: 50%;
    min-width: 500px;
    align-self: flex-end;
    margin-top: -40px;
    z-index: 2;
  } */

  @media only screen and (min-width: 1024px) {
    width: 100%;
    min-width: 100%;
    margin-top: 0;
    text-align: left;
    & ${SecondaryButton} {
      justify-content: flex-start;

      /* margin-left: 0; */
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 40px;
  }
`
