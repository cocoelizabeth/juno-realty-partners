import styled from "styled-components"

export const ReasonItemWrapper = styled.div`

  text-align: left;
  line-height: 1.7;
  margin-bottom: var(--space-md);
  border-left: 4px solid var(--color-accent);
  padding-left: var(--space-gap);

  // small breakpoint
  @media (min-width: 480px) {
    max-width: 550px;
  }

 @media only screen and (min-width: 1024px) {
    margin-bottom: 40px;
        
  }

  // medium breakpoint
  @media (min-width: 768px) {
    max-width: 750px;
  }
` 
export const Heading = styled.h3`
  max-width: 100%;
  color: var(--color-accent);
  font-weight: var(--font-weight-semi-bold);
   @media only screen and (min-width: 1024px) {
    font-size: 20px;
        
  }

`

export const Body = styled.div`
  // small breakpoint
  @media (min-width: 480px) {
    max-width: 550px;
  }

  // medium breakpoint
  @media (min-width: 768px) {
    max-width: 750px;
  }
`
