import styled from "styled-components"

/* -------------------------------------------------------------------------- */
/*                              Basic text blocks                             */
/* -------------------------------------------------------------------------- */
export const Paragraph = styled.p`
  margin-bottom: var(--space-gap);
  line-height: 1.7;
  color: var(--color-dark);
   /* font-weight: var(--font-weight-light); */
`

export const Heading1 = styled.h1`
  font-size: var(--font-size-xxl);
  margin: var(--space-lg) 0 var(--space-md);
  font-weight: bold;
`

export const Heading2 = styled.h2`
  font-size: var(--font-size-xl);
  margin: var(--space-lg) 0 var(--space-md);
  font-weight: bold;
`

export const Heading3 = styled.h3`
  font-size: var(--font-size-lg);
  margin: var(--space-md) 0 var(--space-sm);
  font-weight: bold;
`

/* -------------------------------------------------------------------------- */
/*                       Marks (bold, italic, underline)                      */
/* -------------------------------------------------------------------------- */
export const Bold = styled.span`
  font-weight: bold;
`

export const Italic = styled.span`
  font-style: italic;
`

export const Underline = styled.span`
  text-decoration: underline;
`

/* -------------------------------------------------------------------------- */
/*                                    Links                                   */
/* -------------------------------------------------------------------------- */

export const RichTextLink = styled.a`
  color: var(--color-accent);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

/* -------------------------------------------------------------------------- */
/*                                 List items                                 */
/* -------------------------------------------------------------------------- */
export const UnorderedList = styled.ul`
  margin-left: var(--space-lg);
  list-style: disc;
`

export const OrderedList = styled.ol`
  margin-left: var(--space-lg);
  list-style: decimal;
`

export const ListItem = styled.li`
  margin-bottom: var(--space-sm);
`