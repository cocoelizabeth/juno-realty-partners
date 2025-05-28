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
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.55);
    top: 0;
  }

  .heading-container {
    height: 100%;
    width: 100%;
    z-index: 101;
    position: absolute;
    top: 0;
    color: white;
    display: flex;
    align-items: center;

    h1.hero-heading {
      font-size: var(--font-size-xl);
      padding: var(--section-side-padding);
      max-width: var(--max-width);
      margin: 0 auto;
      width: 100%;
    }
  }

  .footnote-container {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    
    z-index: 101;
    p.footnote {
        font-size: var(--font-size-sm);
        color: white;
        max-width: var(--max-width);
        margin: 0 auto;
        width: 100%;
        padding: var(--space-xs) var(--section-side-padding);
   
    }
    
  }

  // desktop height
  .hero-image-container,
  .image-overlay,
  .heading-container,
  .footnote-container {
    min-height: 700px;
    height: 80vh;
  }
  @media (max-width: 768px) {
    // mobile-height
    .hero-image-container,
    .image-overlay,
    .heading-container,
    .footnote-container {
      min-height: 400px;
      height: 60vh;
    }
  }
`
