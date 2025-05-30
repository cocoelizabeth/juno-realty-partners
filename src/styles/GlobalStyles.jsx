import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  /* *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
  }

  :root {
    --light: ${({ theme }) => theme.colors.light};
    --dark: ${({ theme }) => theme.colors.dark};
    --medium: ${({ theme }) => theme.colors.medium};
    --accent: ${({ theme }) => theme.colors.accent};

  } */
/* add more css here */
  :root {
    /* Colors */
    --color-light: #ffffff;
    --color-dark: #000000;
    --color-medium: #efeff0;
    --color-accent: #b40023;

    /* Spacing */
    --space-none: 0;
    --space-xs: 10px;
    --space-sm: 25px;
    --space-md: 30px;
    --space-lg: 2rem;
    --space-xl: 80px;
    --section-side-padding: 25px;
    --space-gap: 20px;

    @media only screen and (min-width: 480px) {
      --space-xs: 20px;
      --space-sm: 38px;
      --section-side-padding: 38px;
    }


    @media only screen and (min-width: 768px) {
      --space-xs: 20px;
      --space-sm: 38px;
      --section-side-padding: 66px;
    }

    /* Typography */
    --font-body: "indivisible", system-ui, sans-serif;
    --font-heading: "than", Georgia, serif;
    --font-size-body: 15px;
    --font-size-button: 13px;
    --font-size-xs: 8px;
    --font-size-sm: 10px;
    --font-size-md: 1rem;
    --font-size-lg: 24px;
    --font-size-xl: 35px;
    --font-size-statistic: 62px;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;

    @media only screen and (min-width: 480px) {
      --font-size-xs: 10px;
      --font-size-lg: 26px;
      --font-size-xl: 45px;
    }

    @media only screen and (min-width: 768px) {

      --font-size-sm: 14px;
      --font-size-lg: 2.1em;
      --font-size-xl: 50px;
      --font-size-statistic: 80px;
    }

    @media only screen and (min-width: 928px) {
      --font-size-xl: 56px;
    }

    @media only screen and (min-width: 1024px) {
      --font-size-xs: 10px;
      --font-size-sm: 14px;
      --font-size-xl: 70px;
    }

    @media only screen and (min-width: 1200px) {

    }




    /* Breakpoints */
    --bp-sm: 480px;
    --bp-md: 768px;
    --bp-lg: 1024px;
    --bp-xl: 1200px;

    /* Max Width */
    --max-width: calc(1260px + (2*var(--section-side-padding)));
    

    /* Navigation Styling */
    --logo-height: 30px;
    --nav-padding: var(--space-sm) var(--section-side-padding);
    --nav-height: calc(var(--logo-height) + (2*(var(--space-sm))));
    --nav-height-minus-bottom-padding: calc(var(--nav-height) - var(--space-sm));


    @media only screen and (min-width: 768px) {
      --logo-height: 40px;
    }

   

    /* Link Styling */
    --nav-link-text-decoration: underline;
    --nav-link-underline-offset: .4rem;
    --nav-link-color: var(--color-dark);
  }

  *,*::before,*::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
    /* -webkit-font-smoothing: antialiased; */
  }

  html, body {
    overflow-x: hidden;   /* hide anything that spills outside the viewport */
  }

  body {
    font-family: var(--font-body);
    background: var(--color-light);
    color: var(--color-dark);
    font-weight: var(--font-weight-regular);
        

  }

  h1, h2, h3, h4 {
     text-rendering: optimizeLegibility;
  }

  h1,
  h2 {
    font-family: var(--font-heading);
    font-weight: var(--font-weight-regular);
    line-height: 1.4;
    

  }

  h2 {
    font-size: var(--font-size-lg)
  }
  

  p {
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-body);
    line-height: 1.7;
    word-wrap: break-word;
    

  }
  
`

export default GlobalStyles
