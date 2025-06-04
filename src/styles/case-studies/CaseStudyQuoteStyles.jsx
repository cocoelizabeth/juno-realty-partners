// src/styles/shared/QuoteStyles.js
import styled from "styled-components"

export const QuoteWrapper = styled.div`
  /* --quote-font-size: 17px; */
  --speaker-line-font-size: 12px;
 --inline-quote-float: none;
 --inline-quote-width: 100%;
 --inline-quote-max-width: 100%;
 --inline-quote-margin: var(--space-md) 0;
 --inline-quote-padding: var(--space-gap);
--inline-quote-background-color: var(--color-medium);

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
    --inline-quote-padding: 0 0 0 var(--space-gap);
    --inline-quote-background-color: transparent;
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
  margin: var(--space-lg) var(--space-md);
  padding: var(--space-md);
  border-left: 4px solid var(--color-accent);
    background-color: var(--color-medium);
  font-style: italic;
  position: relative;
`

// InlineQuoteWrapper is what appears “inside” a paragraph:
// Give it float: right, a max-width, and left margin so text wraps nicely.
export const InlineQuoteWrapper = styled.blockquote`
  float: var(--inline-quote-float);
  width: var(--inline-quote-width);                     /* or whatever percentage suits your design */
  max-width: var(--inline-quote-max-width);

  margin: var(--inline-quote-margin);
  padding: var(--inline-quote-padding);
  border-left: 4px solid var(--color-accent);
  background-color: var(--inline-quote-background-color);
 
  
  /* Optional: ensure it doesn’t break out on very small screens */

`

export const QuoteText = styled.div`
  margin: 0 0 var(--space-xs) 0;

  p {
      font-size: 20px;
        line-height: 1.7;
  font-family: var(--font-heading);
  margin-bottom: var(--space-xs);


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