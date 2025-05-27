import styled from 'styled-components';

export const ActionButtonStyles = styled.footer`
  cursor: pointer;
  ${'' /* border: 2px solid var(--primary); */}
  padding: 0.3rem;
  ${'' /* border-radius: 8px; */}
  color: var(--racoma-light);
  transition-property: color;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2.5rem;
  }
  * {
    pointer-events: none;
  }
  &:hover {
    color: white;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
    svg {
      font-size: 1.8rem;
    }
  }
`;
