// src/styles/templates/CaseStudyStyles.js
import styled from "styled-components"

// -------------- Page Wrapper --------------
export const PageWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--top-section-padding);
  font-family: var(--font-body);
  color: var(--color-dark);
  margin-top: var(--nav-height);
  padding-bottom: 0;

  --case-study-section-margin: var(--case-study-space-lg);

  --top-section-padding: calc(var(--space-xl) / 2) var(--section-side-padding);

  --bread-crumbs-font-size: var(--font-size-xs);
  --bread-crumbs-margin-bottom: 40px;

  --location-font-size: var(--font-size-sm);
  --title-line-margin-bottom: var(--case-study-space-lg);

  --content-section-flex-direction: column;
  --content-max-width: 100%;


  --overview-section-padding-top: 0px;
  --overview-section-margin-bottom: var(--case-study-space-lg);
  --overview-width: 100%;
  --overview-min-width: 100%;
  --overview-h3-font-size: var(--font-size-button);
  --overview-items-font-size: 14px;
  --overview-items-padding: 12px 0;

  --case-study-content-wrapper-padding-right: 0;
  --case-study-title-font-size: var(--font-size-lg);



  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    /* --content-section-flex-direction: row-reverse;
    --overview-min-width: 190px;
     --overview-section-padding-top: 4px;
    --case-study-content-wrapper-padding-right: var(--space-md); */
    /* --case-study-title-font-size: 25px; */
  
  }
  @media only screen and (min-width: 928px) {
    --top-section-padding: var(--space-xl) var(--section-side-padding);
    --bread-crumbs-margin-bottom: var(--space-xl);
    --content-section-flex-direction: row-reverse;
    --overview-section-padding-top: 8px;
    --overview-items-font-size: 13px;
    --overview-min-width: 190px;
    --overview-items-paddings: var(--space-gap) 0;
    --case-study-content-wrapper-padding-right: var(--space-md);
    /* --case-study-title-font-size:26px; */

  }
  @media only screen and (min-width: 1024px) {
    --case-study-title-font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
  }
`

// -------------- Breadcrumbs --------------
export const Breadcrumbs = styled.div`
  margin-bottom: var(--bread-crumbs-margin-bottom);
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
  }
  p {
    font-size: var(--location-font-size);
    text-transform: uppercase;
    letter-spacing: 3px;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    display: inline-block;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--color-dark);
    width: 100%;
    line-height: 1.7;
  }
`

// -------------- Content Section --------------
export const ContentSection = styled.div`
  margin-bottom: var(--space-xxl);
  display: flex;
  flex-direction: var(--content-section-flex-direction);
`

// -------------- Overview Section --------------
export const OverviewSectionStyles = styled.section`
  margin-bottom: var(--overview-section-margin-bottom);
  width: var(--overview-width);
  min-width: var(--overview-min-width);
  padding-top: var(--overview-section-padding-top);
  line-height: 1.4;
  

  h3 {
    text-transform: uppercase;
    letter-spacing: 3px;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    display: inline-block;
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
    padding: var(--overview-items-padding);
    border-radius: 4px;
    font-weight: var(--font-weight-medium);
    border-bottom: 1px solid var(--color-medium);
    font-size: var(--overview-items-font-size);
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
  h2.case-study-title {
    color: var(--color-accent);
     margin-bottom:  var(--case-study-space-md);
    font-size: var(--case-study-title-font-size);
    font-weight: 500;
  }

  h2.case-study-section-title {
    font-size: var(--font-size-lg);
    /* font-weight: 700; */
    
  }
`

// -------------- Opening Image --------------
/* We just rely on the parent <div className="opening-image"> + <GatsbyImage> styling. 
   If you want a max-height or aspect ratio, wrap it in a styled div. */

// -------------- Text Block Section --------------
export const TextBlockSection = styled.section`
  margin-top: var(--space-md);
  margin-top: var(--case-study-section-margin);
  margin-bottom: var(--space-xxl);


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
  margin-top: var(--case-study-space-lg);
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
  background-color: var(--color-medium);
  margin-top: var(--space-xl);
      padding: var(--space-xl) var(--section-side-padding);

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
    max-width: var(--max-width);
    margin: 0 auto;
    flex-direction: column;
      @media only screen and (min-width: 768px) {
flex-direction: row;
  }
  }

`
