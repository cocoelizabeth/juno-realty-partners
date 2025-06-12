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
  padding-bottom: ${props =>
    props.$currentSlug === "about" ? "var(--space-lg)" : "var(--space-xl)"};

  @media only screen and (min-width: 480px) {
    padding-bottom: ${props =>
      props.$currentSlug === "about" ? "40px" : "var(--space-xl)"};
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: ${props =>
      props.$currentSlug === "about" ? "60px" : "var(--space-xl)"};
  }

  @media only screen and (min-width: 928px) {
    padding-bottom: var(--space-xl);
  }
`
export const Title = styled.h2`
  max-width: 100%;
  margin-bottom: var(--space-md);

  @media only screen and (min-width: 480px) {
    max-width: 550px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 750px;
  }
` 
export const Body = styled.div`

  @media only screen and (min-width: 480px) {
    max-width: 550px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 750px;
  }
`
