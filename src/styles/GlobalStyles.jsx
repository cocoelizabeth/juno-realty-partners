import { createGlobalStyle } from 'styled-components';

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
    --space-xs: 20px;
    --space-sm: 38px;
    --space-md: 1rem;
    --space-lg: 2rem;
    --space-xl: 4rem;
    --section-side-padding: 66px;

    @media only screen and (max-width: 768px) {
      --space-xs: 10px;
      --space-sm: 25px;
      --section-side-padding: 25px;
    }

    /* Typography */
    --font-body: "indivisible", system-ui, sans-serif;
    --font-heading: "than", Georgia, serif;
    --font-size-xs: 10px;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 70px;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;

    @media only screen and (max-width: 768px) {
      --font-size-xs: 8px;
      --font-size-xl: 35px;
    }


    /* Breakpoints */
    --bp-sm: 480px;
    --bp-md: 768px;
    --bp-lg: 1024px;
    --bp-xl: 1200px;

    /* Max Width */
    --max-width: calc(1260px + (2*var(--section-side-padding)));
    

    /* Navigation Styling */
    --logo-height: 40px;
    --nav-padding: var(--space-sm) var(--section-side-padding);
    --nav-height: calc(var(--logo-height) + (2*(var(--space-sm))));
   

    /* Link Styling */
    --nav-link-text-decoration: underline;
    --nav-link-underline-offset: .4rem;
    --nav-link-color: var(--color-dark);
  }

  *,*::before,*::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
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

  h1 {
    font-family: var(--font-heading);
    font-weight: var(--font-weight-light);
  }

  p {
    font-weight: var(--font-weight-regular);
  }
  
`;

export default GlobalStyles;
