import styled from "styled-components"
import { PrimaryButton } from "../ButtonStyles"

export const FeaturedProjectsSectionWrapper = styled.section`
  padding: 0 var(--section-side-padding);
  padding-bottom: var(--space-xl);
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* padding: ${props =>
    props.currentSlug === "portfolio" ? "0px 20px" : "220"}; */

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
export const FeaturedProjectsItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
  justify-content: space-between;
  align-items: stretch;
  max-width: 100%;
  margin-bottom: var(--space-md);

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    column-gap: var(--space-gap);
  }
`
