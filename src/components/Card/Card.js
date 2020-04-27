import styled from 'styled-components/macro';

/** styled card */
const Card = styled.article`
  display: flex;
  flex-direction: var(--card-direction, row);
  background-color: var(--card-background-color, white);
  border-radius: var(--card-border-radius, 5px);
  box-shadow: var(--card-shadow, none);
  overflow: hidden;
`;

export default Card;
