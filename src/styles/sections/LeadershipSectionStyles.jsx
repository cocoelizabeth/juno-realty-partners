import styled from "styled-components"

export const LeadershipSectionWrapper = styled.section`
  padding: var(--space-xl) var(--section-side-padding);
  padding-top: 0;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const SectionHeading = styled.h2`
  max-width: 100%;
  /* margin-bottom: calc(var(--space-md) - var(--space-gap)); */
  padding-bottom: 5px;
  border-bottom: 1px solid var(--color-dark);
  margin-bottom: var(--space-md);
  @media only screen and (min-width: 768px) {
    margin-bottom: var(--space-md);
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;

  /* @media only screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: var(--space-gap);
  } */
`;

