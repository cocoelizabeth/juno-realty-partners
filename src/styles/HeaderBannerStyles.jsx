import styled from "styled-components"

export const HeaderBannerStyles = styled.div`
  .hero-image-container {
    position: relative;
    .hero-image {
      width: 100%;
    }
  }

  .image-overlay {
    position: absolute;
    color: white;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.55);
    top: 0;
  }

  .heading-container {
    height: 100%;
    width: 100%;

    z-index: 3;
    position: absolute;
    top: 0;
    color: white;
    display: flex;
    align-items: center;

    h1.hero-heading {
      font-size: var(--font-size-xl);
      padding: var(--nav-padding);
      padding-bottom: 0;
      max-width: var(--max-width);
      /* max-width: 1100px; */
      margin: 0 auto;
      width: 100%;

      margin-top: var(--nav-height-minus-bottom-padding);
      padding-top: 0;
    }
  }

  .footnote-container {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;

    z-index: 2;
    p.footnote {
      font-size: var(--font-size-sm);
      color: white;
      max-width: var(--max-width);
      margin: 0 auto;
      width: 100%;
      padding: var(--space-xs) var(--section-side-padding);
    }
  }
  // mobile break point
  .hero-image-container,
  .image-overlay,
  .heading-container,
  .footnote-container {
    min-height: 300px;
    height: 30vh;
  }


  // small breakpoint
  @media (min-width: 480px) {
    .hero-image-container,
    .image-overlay,
    .heading-container,
    .footnote-container {
      min-height: 400px;
      height: 50vh;
    }
    h1.hero-heading {
        margin-top: 0;
    }
  }

  // medium breakpoint
  @media (min-width: 768px) {
    .hero-image-container,
    .image-overlay,
    .heading-container,
    .footnote-container {
      min-height: 500px;
      height: 70vh;

    }
  }

  

  // large breakpoint
  @media (min-width: 1024px) {
    .hero-image-container,
    .image-overlay,
    .heading-container,
    .footnote-container {
      min-height: 600px;
      height: 80vh;
    }
  }

  // x-large breakpoint
  @media (min-width: 1200px) {
    .hero-image-container,
    .image-overlay,
    .heading-container,
    .footnote-container {
      min-height: 700px;
      height: 80vh;

  }
}

  @media (min-width: 1235px) {
        
    .heading-container {
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
    padding: var(--nav-padding);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    h1.hero-heading {
        max-width: 1050px;
        margin-left: 0;
        padding: 0;
    }
  }
  }

`
