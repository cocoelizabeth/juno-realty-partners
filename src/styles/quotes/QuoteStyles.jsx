import styled from "styled-components"
// import { Link } from "gatsby"

export const QuoteSingularSectionWrapper = styled.section`
  text-align: center;
  padding: var(--space-xl) var(--section-side-padding);
  padding-top: 0;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: var(--color-dark);

  max-width: var(--max-width);

  .quote-wrapper {
    width: 100%;
    background-color: var(--color-medium);
    padding: var(--space-xl) var(--section-side-padding);
  }

  .quotation-svg {
    margin-bottom: 30px;
  }

  .quote {
    p {
      font-size: var(--font-size-lg);
      font-family: var(--font-heading);
      line-height: 1.4;
      margin: 0 auto;
      margin-bottom: 30px;
      max-width: 750px;
    }
  }
  .speaker {
    color: var(--color-accent);
    text-transform: uppercase;
    font-weight: var(--font-weight-bold);
  }
`
