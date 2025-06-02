import styled from "styled-components"

export const ProjectGridSectionWrapper = styled.section`
  padding: 0 var(--section-side-padding);
  padding-bottom: var(--space-xl);
  max-width: var(--max-width);
  margin: 0 auto;
`

export const ProjectGrid = styled.div`
  display: grid;
  gap: var(--space-md);

  grid-template-columns: 1fr; /* 1 column on desktop */

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets/medium */
  }
  /* 3 columns on desktop/large */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop/large */
  }
`
