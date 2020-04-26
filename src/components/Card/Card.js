import styled from 'styled-components/macro';

/** styled card */
const Card = styled.article`
  overflow: hidden;
  background-color: var(--card-background-color, white);
  border-radius: var(--card-border-radius, 5px);
  box-shadow: var(--card-shadow, none);
`;

export default Card;
