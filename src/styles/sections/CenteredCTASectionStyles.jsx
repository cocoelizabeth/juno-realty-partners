import styled from "styled-components"

export const SectionWrapper = styled.section`
  text-align: center;
  padding: var(--space-xl) var(--section-side-padding);
  padding-top: 0;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
export const Title = styled.h2`
  max-width: 100%;
  margin-bottom: var(--space-md);

  // small breakpoint
  @media (min-width: 480px) {
    max-width: 550px;
  }

  // medium breakpoint
  @media (min-width: 768px) {
    max-width: 750px;
  }
` /* add your centered‐CTA styles here */
export const Body = styled.div`
  // small breakpoint
  @media (min-width: 480px) {
    max-width: 550px;
  }

  // medium breakpoint
  @media (min-width: 768px) {
    max-width: 750px;
  }
`
