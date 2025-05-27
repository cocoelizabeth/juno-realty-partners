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
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 2rem;
    --space-xl: 4rem;

    /* Typography */
    --font-body: "indivisible", system-ui, sans-serif;
    --font-heading: "than", Georgia, serif;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-weight-regular: 400;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;

    /* Breakpoints */
    --bp-sm: 480px;
    --bp-md: 768px;
    --bp-lg: 1024px;
    --bp-xl: 1200px;

    /* Max Width */
    --max-width: 1260px;

    /* Navigation Styling */
    --logo-height: 40px;
    --nav-padding: var(--space-md);
    --nav-height: calc(var(--logo-height)+(2*(var(--nav-padding))))
  

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
    font-weight: var(--font-weight-regular);
  }

  p {
    font-weight: var(--font-weight-regular);
  }
  
`;

export default GlobalStyles;
