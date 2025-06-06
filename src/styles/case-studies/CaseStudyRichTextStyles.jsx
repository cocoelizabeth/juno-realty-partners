// src/styles/shared/RichTextStyles.js
import styled from "styled-components"

// This wrapper resets the counter before any h3 inside it.
// You can apply this wrapper around each "text block" (e.g. a Challenges/Solutions section).
export const RichTextContainer = styled.div`
  --rich-text-container-display: flex;
  --align-text-to-h3: 0;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 928px) {
    --rich-text-container-display: block;
  }
  @media only screen and (min-width: 1024px) {
        /* --h3-font-size: 20px; */
  }
  @media only screen and (min-width: 1200px) {
  }

  display: var(--rich-text-container-display);
  flex-direction: column;


  counter-reset: subheading;

  p {
    margin-top: var(--space-gap);
    line-height: 1.7;
    margin-left: var(--align-text-h3);
  }
  ul,
  ol {
    margin-left: var(--space-lg);

  }
  li {
    margin-bottom: 0;
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
  font-size: 1rem;
    margin-top: var(--case-study-space-md);

  b {
    font-weight: var(--font-weight-semi-bold);
  }

  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }

  &::before {
    content: counter(subheading) ". ";
    color: var(--color-accent);
    font-weight: var(--font-weight-semi-bold);
    margin-right: 5px;
  }
`

export const UnorderedList = styled.ul``
export const OrderedList = styled.ol``
export const ListItem = styled.li``
