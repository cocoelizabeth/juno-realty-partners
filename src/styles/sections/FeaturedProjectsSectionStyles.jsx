import styled from "styled-components"
import { PrimaryButton } from "../ButtonStyles"

export const FeaturedProjectsSectionWrapper = styled.section`
  padding: 0 var(--section-side-padding);
  padding-bottom: var(--space-xl);
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: ${props =>
    props.$currentSlug === "portfolio" ? "0" : "var(--space-xl)"};

  & ${PrimaryButton} {
    width: fit-content;
    margin: 0 auto;
  }
`
export const SectionHeading = styled.h2`
  max-width: 100%;
  margin-bottom: var(--space-md);
  padding-bottom: 5px;
  border-bottom: 1px solid var(--color-dark);
`

export const Disclaimer = styled.div`
  font-size: var(--font-size-sm);
  opacity: 0.48;
  margin: 0 auto;
  padding-bottom: var(--space-md);
  width: 100%;
  height: auto;
  font-style: italic;
  /* margin-top: calc(((var(--space-xl)/2)*-1)); */
   /* margin-bottom: calc((var(--space-xl)/2)); */
  @media only screen and (min-width: 768px) {

  }

`
export const FeaturedProjectsItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
  justify-content: space-between;
  align-items: stretch;
  max-width: 100%;
  margin-bottom: var(--space-md);

  margin-bottom: ${props =>
    props.$currentSlug === "portfolio" ? "0" : "var(--space-md)"};

      row-gap: ${props =>
    props.$currentSlug === "portfolio" ? "0" : "20px"};

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    column-gap: var(--space-gap);
       column-gap: ${props =>
    props.$currentSlug === "portfolio" ? "var(--space-md)" : "var(--space-gap)"};
    
  }
`
