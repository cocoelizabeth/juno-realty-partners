// src/styles/shared/RichTextStyles.js
import styled from "styled-components"

// This wrapper resets the counter before any h3 inside it.
// You can apply this wrapper around each "text block" (e.g. a Challenges/Solutions section).
export const RichTextContainer = styled.div`
  /* Reset our custom counter name “subheading” */
  counter-reset: subheading;
  
  /* Optional: keep some base typography for all paragraphs/ul/ol, etc. */
  p {
    margin-bottom: var(--space-md);
    line-height: 1.7;
  }
  ul, ol {
    margin-left: var(--space-lg);
    margin-bottom: var(--space-md);
  }
  li {
    margin-bottom: var(--space-sm);
  }
`

// This H3 will automatically get a number before its text:
//   <h3>First topic</h3> → “1. First topic”
export const NumberedH3 = styled.h3`
  /* Increment counter each time we hit an H3 */
  counter-increment: subheading;
      display: inline-block;
    color: var(--color-accent);
       font-weight: var(--font-weight-semi-bold);
       b {
        font-weight: var(--font-weight-semi-bold);
       }

    @media only screen and (min-width: 1024px) {
    font-size: 20px;
        
  }

  &::before {
    content: counter(subheading) ". ";
    color: var(--color-accent);
     font-weight: var(--font-weight-semi-bold);
  }
`
