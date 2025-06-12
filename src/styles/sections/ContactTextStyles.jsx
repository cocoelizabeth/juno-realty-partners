import styled from "styled-components"

export const SectionWrapper = styled.section`
  text-align: center;
  padding: var(--space-xl) var(--section-side-padding);
  padding-top: 0;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: ${props =>
    props.$currentSlug === "contact" ? "var(--space-lg)" : "var(--space-xl)"};


&:first-of-type {
      padding-bottom: var(--space-xl);
      p {
        margin-bottom: 0;
      }
}
  @media only screen and (min-width: 480px) {
    padding-bottom: ${props =>
      props.$currentSlug === "contact" ? "40px" : "var(--space-xl)"};
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: ${props =>
      props.$currentSlug === "contact" ? "60px" : "var(--space-xl)"};
  }

  @media only screen and (min-width: 928px) {
    padding-bottom: var(--space-xl);
  }
`
export const Title = styled.h2`
width: 100%;
  max-width: 100%;
  margin-bottom: var(--space-md);
  text-align: center;
  max-width: 325px;
  

  @media only screen and (min-width: 480px) {
    max-width: 350px;
  }

    @media only screen and (min-width: 499px) {
    max-width: 450px;
  }


  @media only screen and (min-width: 768px) {
    /* max-width: 650px; */
     max-width: 550px;
  }
` 
export const Body = styled.div`
width: 100%;
 p {
    margin-bottom: var(--space-gap);
 }

 b {
  color: var(--color-accent);
    font-weight: var(--font-weight-semi-bold);
 }
 h2 {
  margin-bottom: var(--space-md);
 }

 a {
    /* text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  display: inline-block;
  font-size: var(--font-size-button);
  color: var(--color-dark);
  border-bottom: 1px solid var(--color-dark); */
  text-decoration: none;
    color: var(--color-dark);
  border-bottom: 1px solid var(--color-dark);
  font-weight: var(--font-weight-semi-bold);

  line-height: 1.7;
      margin-left: 10px;
  &:before {

  }

 }

  @media only screen and (min-width: 480px) {
    max-width: 550px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 750px;
  }
`
