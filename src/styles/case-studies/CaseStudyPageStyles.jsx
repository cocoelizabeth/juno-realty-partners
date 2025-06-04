// src/styles/templates/CaseStudyStyles.js
import styled from "styled-components"

// -------------- Page Wrapper --------------
export const PageWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-xl) var(--section-side-padding);
  font-family: var(--font-body);
  color: var(--color-dark);
  margin-top: var(--nav-height);

  --bread-crumbs-font-size: var(--font-size-xs);
  --title-line-margin-bottom: calc((var(--space-gap)) *2);
  --overview-h3-font-size: var(--font-size-button);
  --overview-items-font-size: 14px;
  --overview-section-margin-bottom: calc((var(--space-gap)) *2);
  --content-section-flex-direction: column;
  --content-max-width: 100%;
  --overview-width: 100%;
  --overview-min-width: 100%;
  --case-study-content-wrapper-padding-right: 0;
  

  @media only screen and (min-width: 480px) {}
  @media only screen and (min-width: 768px) {
        --content-section-flex-direction: row-reverse;
             --overview-min-width: 190px;
     --case-study-content-wrapper-padding-right: var(--space-md);
  }
  @media only screen and (min-width: 928px) {
    --content-section-flex-direction: row-reverse;
     --overview-min-width: 200px;
     --case-study-content-wrapper-padding-right: var(--space-md);
  }
  @media only screen and (min-width: 1024px) {}
  @media only screen and (min-width: 1200px) {}
`

// -------------- Breadcrumbs --------------
export const Breadcrumbs = styled.div`
  margin-bottom: var(--space-xl);
  display: flex;
  p,
  a {
    text-transform: uppercase;
    letter-spacing: 3px;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    display: inline-block;
    font-size: var(--bread-crumbs-font-size);
    color: var(--color-dark);
    line-height: 1.7;
    font-weight: var(--font-weight-bold);
  }
  p {
    &:before {
      content: ">";
      padding: 0 calc(var(--space-gap) / 2);
    }
  }
  a {
    text-decoration: none;
    color: var(--color-dark);
    border-bottom: 1px solid var(--color-dark);
    cursor: pointer;
  }
`

// -------------- Title Section --------------
export const TitleSection = styled.section`
  text-align: left;
  margin-bottom: var(--title-line-margin-bottom);
  width: var(--content-width);

  h1 {
    font-size: var(--font-size-xl);
    /* margin-bottom: var(--space-xs); */
  }
  p {
    font-size: var(--font-size-md);
    text-transform: uppercase;
    letter-spacing: 3px;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    display: inline-block;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--color-dark);
    /* margin-bottom: var(--space-xs); */
    width: 100%;
    line-height: 1.7;
  }
`

// -------------- Content Section --------------
export const ContentSection = styled.div`
  margin-bottom: var(--space-xxl);
  /* margin-top: var(--space-xl); */
  /* background-color: red; */
  display: flex;
  flex-direction: var(--content-section-flex-direction);
`

// -------------- Overview Section --------------
export const OverviewSectionStyles = styled.section`
  margin-bottom: var(--overview-section-margin-bottom);
  width: var(--overview-width);
  min-width: var(--overview-min-width);
 
  h3 {
      text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  display: inline-block;
  /* font-size: var(--font-size-button); */
  color: var(--color-accent);
    font-size: var(--overview-h3-font-size);
  line-height: 1.7;
  padding: var(--space-gap) 0;
  padding-top: 0;
   border-bottom: 1px solid var(--color-medium);
   width: 100%;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  li {
    background: var(--color-light);
    padding: var(--space-gap) 0;
    border-radius: 4px;
    font-weight: var(--font-weight-medium);
    border-bottom: 1px solid var(--color-medium);
    font-size:var(--overview-items-font-size);
    span.label {
      font-weight: var(--font-weight-semi-bold);
      margin-right: 5px;
    }

  }
`

// -------------- Case Study Content Wrapper Section --------------
export const CaseStudyContentWrapper = styled.div`
  padding-right: var(--case-study-content-wrapper-padding-right);
  margin-bottom: var(--space-xxl);
  display: flex;
 flex-direction: column;
 h2 {
    color: var(--color-accent);
    margin-bottom: var(--space-xs);
    font-size: 40px;
 }
`

// -------------- Opening Image --------------
/* We just rely on the parent <div className="opening-image"> + <GatsbyImage> styling. 
   If you want a max-height or aspect ratio, wrap it in a styled div. */

// -------------- Text Block Section --------------
export const TextBlockSection = styled.section`
  margin-top: var(--space-md);
  margin-bottom: var(--space-xxl);


  /* Body Rich Text */
  > div {
    /* margin-top: var(--space-md); */

    p {
      /* margin-bottom: var(--space-md);
      line-height: 1.6; */
    }

    h3 {
      /* margin-top: var(--space-lg); */
      /* font-size: var(--font-size-md);
      font-weight: var(--font-weight-semi-bold); */
    }

    ul,
    ol {
      /* margin-left: var(--space-lg);
      margin-bottom: var(--space-md); */
    }
    li {
      margin-bottom: var(--space-sm);
    }

    /* If you embedded images in RichText, style them */
    img {
      max-width: 100%;
      margin: var(--space-lg) auto;
      display: block;
    }
  }

  .embedded-quote {
    margin: var(--space-lg) 0;
    padding: var(--space-md);
    background: var(--color-grey-light);
    border-left: 4px solid var(--color-accent);
    font-style: italic;

    footer {
      margin-top: var(--space-sm);
      text-align: right;
      font-weight: var(--font-weight-bold);
      color: var(--color-dark);
    }



  }

      /* .quote-hanging-right {
        margin-top: 2.5rem;
        font-size: var(--font-size-lg);
        float: right;
        padding-left: 3.5rem;
        margin-left: 5rem;
        margin-right: -6rem;
        border-left: 3px solid #b70021;
        top: 0;
     
    } */
`

// -------------- Gallery Section --------------
export const GallerySection = styled.section`
  margin-bottom: var(--space-xxl);

  h2 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-md);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
  }
  .grid-item {
    overflow: hidden;
    border-radius: 8px;
  }
`

// -------------- “More Featured Projects” Section --------------
export const MoreFeaturedSection = styled.section`
  margin-top: var(--space-xxl);

  h2 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-md);
    text-align: center;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-lg);
    justify-content: center;
  }

  .card {
    text-decoration: none;
    background: var(--color-light);
    padding: var(--space-md);
    border-radius: 4px;
    width: 300px;
    transition: transform 0.2s ease;
    color: var(--color-dark);
    border: 1px solid var(--color-grey);

    &:hover {
      transform: translateY(-4px);
      border-color: var(--color-accent);
    }

    h3 {
      font-size: var(--font-size-md);
      margin-bottom: var(--space-sm);
    }
    p {
      font-size: var(--font-size-sm);
      font-style: italic;
      color: var(--color-grey-dark);
    }
  }
`
