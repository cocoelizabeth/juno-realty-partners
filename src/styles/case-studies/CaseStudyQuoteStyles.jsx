// src/styles/shared/QuoteStyles.js
import styled from "styled-components"

export const QuoteWrapper = styled.div`
  --speaker-line-font-size: 12px;
  --inline-quote-float: none;
  --inline-quote-width: 100%;
  --inline-quote-max-width: 100%;
  --inline-quote-margin: var(--case-study-space-lg) 0 0 0;
  --inline-quote-padding: var(--space-gap);
  --inline-quote-background-color: var(--color-medium);

  --quote-text-margin: 0;
  --pullout-quote-margin-bottom: 0;

  order: 10; // align to mobile end on mobile;
  margin-bottom: 0;

  @media only screen and (min-width: 480px) {
    /* --quote-font-size: 19px; */
    /* --quote-card-height: 475px; */
  }

  @media only screen and (min-width: 768px) {
    /* --quote-font-size: 26px; */
  }

  @media only screen and (min-width: 928px) {
    /* --quote-font-size: 30px; */
    --inline-quote-float: right;
    --inline-quote-width: 40%;
    --inline-quote-max-width: 350px;
    --inline-quote-margin: 0 var(--space-gap) var(--space-gap) var(--space-gap);
    --inline-quote-padding: 0 0 0 var(--space-md);
    --inline-quote-background-color: transparent;
    --pullout-quote-margin-bottom: 15px;
  }

  @media only screen and (min-width: 1024px) {
    --speaker-line-font-size: 14px;
    /* --quote-font-size: 30px; */
  }
  @media only screen and (min-width: 1200px) {
    /* --quote-font-size: var(--font-size-lg); */
  }
`

// PulloutQuoteWrapper stays full-width (centered, etc.)
export const PulloutQuoteWrapper = styled.blockquote`
  margin: var(--case-study-space-lg) 0;
  padding: var(--case-study-space-md);
  border-left: 4px solid var(--color-accent);
  background-color: var(--color-medium);
  position: relative;
    margin-bottom: var(--pullout-quote-margin-bottom);
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100% */
  p {
  }
`

// InlineQuoteWrapper is what appears “inside” a paragraph:
// Give it float: right, a max-width, and left margin so text wraps nicely.
export const InlineQuoteWrapper = styled.blockquote`
  float: var(--inline-quote-float);
  width: var(
    --inline-quote-width
  ); /* or whatever percentage suits your design */
  max-width: var(--inline-quote-max-width);

  margin: var(--inline-quote-margin);
  padding: var(--inline-quote-padding);
  border-left: 4px solid var(--color-accent);
  background-color: var(--inline-quote-background-color);
  //here
  margin-top: 40px;

  /* Optional: ensure it doesn’t break out on very small screens */
`

export const QuoteText = styled.div`
  margin: 0 0 var(--space-xs) 0;
  margin: var(--quote-text-margin);
  margin-top: 0;
  margin-bottom: 0;
  
  p {
    font-size: 20px;
    line-height: 1.7;
    font-family: var(--font-heading);
    margin-bottom: var(--space-xs);
    margin-bottom: var(--case-study-space-md);
    margin-top: 0;
    font-weight: 500;
  }
`

export const QuoteSpeaker = styled.div`
  display: block;
  /* margin-top: var(--space-xs); */
  text-align: left;
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-accent);
  font-size: var(--speaker-line-font-size);
  text-transform: uppercase;
`
