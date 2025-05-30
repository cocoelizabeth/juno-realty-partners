import styled from "styled-components"
import { Link } from "gatsby"


export const PrimaryButton = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  display: inline-block;
  font-size: var(--font-size-button);
  color: var(--color-dark);
  border-bottom: 1px solid var(--color-dark);
  cursor: pointer;
  line-height: 1.7;
  /* your CTA button styling */
`