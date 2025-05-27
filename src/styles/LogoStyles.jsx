import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  display: inline-block;

  svg {
    display: block;
    fill: var(--color-accent);
    height: 400px;
  }
`;
