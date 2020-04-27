import styled from 'styled-components/macro';

/** renders the card content */
const CardContent = styled.div`
  padding: var(--scale-rhythm, 1rem) var(--card-padding, 1rem)
    var(--card-padding, 1rem);

  &:first-child {
    padding-top: var(--card-padding);
  }
`;

export default CardContent;
