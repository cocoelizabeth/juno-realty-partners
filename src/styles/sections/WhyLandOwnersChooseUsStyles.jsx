import styled from "styled-components"

export const WhyLandownersChooseUsSectionWrapper = styled.section`
  padding: var(--space-xl) var(--section-side-padding);
  padding-top: 0;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: var(--space-gap);
  }
`;
export const SectionHeading = styled.h2`
  max-width: 100%;
  margin-bottom: calc(var(--space-md) - var(--space-gap));
  padding-bottom: 5px;
  border-bottom: 1px solid var(--color-dark);
  @media only screen and (min-width: 768px) {
    margin-bottom: var(--space-md);
  }
`;

export const StatisticItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  margin-bottom: calc(var(--space-gap) * 2);

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }

  @media only screen and (min-width: 1024px) {
    width: 40%;
  }w
`;

export const ReasonItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
