import styled from "styled-components"

export const AccordionSectionWrapper = styled.section`

  color: var(--color-light);
  background-color: var(--color-dark);

`

export const AccordionContentContainer = styled.div`
  padding: var(--space-xl) var(--section-side-padding);
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
    margin: 0 auto;

@media only screen and (min-width: 928px) {
    flex-direction: row;
  }
      /* align-items: center; */

    
`
export const AccordionSectionHeading = styled.h2`
 font-family: var(--font-heading);
 font-size: var(--font-size-xl);
    margin-bottom: var(--space-md);
      @media only screen and (min-width: 768px) {
    padding-bottom: var(--space-md);
  }

    @media only screen and (min-width: 928px) {
    max-width: 30%;
  }

`
export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 928px) {
    padding-left: calc(var(--space-gap) *2);
    width: 70%;
    margin-left: calc(var(--space-gap) *2);
  }
  
  `

export const AccordionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #777;
    padding: var(--space-gap) 0;
      /* A border on top of every item except the very first one (optional) */
  &:last-child {
    border-bottom: 1px solid #777;
  }
`

export const AccordionItemTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between; /* title text on the left, icon on the right */
  padding: 1rem 0;                /* vertical padding */
  cursor: pointer;
  font-size: var(--font-size-lg);
  font-size: 20px;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
  &:hover {
    opacity: .8;
  }
  @media only screen and (min-width: 480px) {
    font-size: var(--font-size-lg);
  }
`
/* The “+” / “–” icon on the right */
export const AccordionIcon = styled.span`
  display: inline-block;
  margin-left: 1rem;
  font-size:1.5rem;
  line-height: 1;
  margin-top: -4px;

  /* Use a prop to decide whether to render “+” or “–” */
  &::before {
    content: ${({ $isOpen }) => ($isOpen ? '"–"' : '"+"' )};
    color: #fff;
  }
`;

export const AccordionItemBody = styled.p `
  padding: 0.75rem 0;
  color: #ddd;
  font-size: 1rem;
  line-height: 1.5;

  /* If you want a smooth “slide‐down” animation instead of unmount/mount,
     you could instead always render this element and use CSS like:
       max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
       overflow: hidden;
       transition: max-height 0.3s ease;
  */
`

