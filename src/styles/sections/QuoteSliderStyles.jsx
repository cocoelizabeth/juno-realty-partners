import styled, { css } from "styled-components" // import { Link } from "gatsby"

export const QuoteSliderSectionWrapper = styled.section`
  position: relative;
  /* max-width: var(--max-width); */
  margin: var(--space-xl) auto;
  padding: 0 var(--section-side-padding);
  padding-top: 20px;
  text-align: center;
  overflow: hidden; /* hide overflow on the wrapper */
  overflow: visible;

  --slide-spacing: 1.5rem;
  --slide-size: 80%;
  --quote-svg-height: 40px;
  --quote-card-height: 450px;
  --quote-card-vertical-padding: 60px;
  --quote-card-side-padding: 25px;
  --quote-font-size: 17px;
  --quote-text-max-width: 100%;
  --quote-text-align: center;
  --author-line-font-size: 12px;
  --dot-size: 7px;

  @media only screen and (min-width: 480px) {
    --quote-font-size: 19px;
    /* --quote-card-height: 475px; */
  }

  @media only screen and (min-width: 768px) {
    --quote-font-size: 26px;
    --quote-card-height: 500px;
    --quote-card-side-padding: 35px;
    --author-line-font-size: 14px;
  }

  @media only screen and (min-width: 928px) {
    --quote-font-size: 30px;
    /* --quote-text-max-width: 750px; */
      --quote-card-side-padding: 50px;
       --quote-card-height: 575px;
  }

    @media only screen and (min-width: 1024px) {
    --quote-font-size: 30px;
    --quote-text-max-width: 750px;
    --quote-card-height: 525px;
  }
      @media only screen and (min-width: 1200px) {
    --quote-font-size: var(--font-size-lg);
    --quote-text-max-width: 900px;
      --quote-card-side-padding: 50px;
       --quote-card-height: 525px;
  }


`

// Embla’s viewport “mask”
// This is the element we pass `ref={viewportRef}` to for Embla.
export const SliderViewport = styled.div`
  /* overflow: hidden; */
  width: 100%;
  overflow: visible;
`

// The flex container that holds all slides in a row
export const SliderContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  margin-left: -10%; /* negative left margin to allow the first slide to peek left a bit (if desired) */
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
  overflow: visible;
`

// Each individual slide
export const Slide = styled.div`
  margin-left: 0;
  padding-right: 0;
  padding-left: var(--slide-spacing);
  /* Ensure slide content is centered inside that 80% container */
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  height: max-content;

  /* Prevent text selection during swipe */
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

// The card that wraps quote + author
export const QuoteCard = styled.div`
  background: var(--color-medium);
  padding: var(--quote-card-vertical-padding) var(--quote-card-side-padding);
  width: 100%; /* fill the Slide’s 80% area */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: var(--quote-card-height);

  .quotation-svg {
    height: var(--quote-svg-height);
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    top: calc((var(--quote-svg-height) / 2) * -1);
  }
`

// ➏ The actual quote text, italicized, with a decorative ““” before it
export const QuoteText = styled.div`
  p {
    font-size: var(--quote-font-size);
    font-family: var(--font-heading);
    line-height: 1.4;
    margin: 0 auto;
    max-width: var(--quote-text-max-width);
    text-align: var(--quote-text-align);
    /* margin-bottom: 30px; */
    /* margin-top: 20px; */
  }
`

// ➐ The author line at bottom of card
export const AuthorLine = styled.p`
  color: var(--color-accent);
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  position: absolute;
  /* max-width: 250px; */
  margin: 0 auto;
  font-size: var(--author-line-font-size);
  text-align: center;
  width: 100%;
  left: 0;
  padding: 0 var(--quote-card-side-padding);
  bottom: 0;
  height: var(--quote-card-vertical-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  
`
export const ArrowButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: var(--space-gap);
  /* margin-top: var(--space-gap); */
`
// ➑ Prev/Next arrow buttons
export const PrevButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--color-accent);
  cursor: pointer;
  z-index: 10;
  &:hover {
    opacity: 0.5;
  }
  left: 0;
  padding-top: 0;
  margin-right: 0;
`

export const NextButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--color-accent);
  cursor: pointer;
  z-index: 10;
  &:hover {
    opacity: 0.5;
  }
  right: 0;
  margin-left: 0;
`

// ➒ Dots container (bottom center)
export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-xs);
  margin-top: var(--space-gap);
  padding-bottom: var(--space-gap);
`

// ➓ Each dot
export const Dot = styled.button`
  width: var(--dot-size);
  height: var(--dot-size);
  border-radius: 50%;
  background: var(--color-medium);
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  ${({ active }) =>
    active &&
    css`
      background: var(--color-accent);
    `}

  &:hover {
    background: var(--color-dark);
  }
`

/* 
      color: ${props =>
      props.isScrolled && !props.open ? "var(--color-dark)" : "var(--color-light)"}; */
