import styled from 'styled-components/macro';

const GridList = styled.section`
  display: grid;
  margin: var(--grid-margin, 1rem);
  grid-template-columns: var(--grid-columns, 1fr);
  gap: var(--grid-gap, 1rem);
`;

export default GridList;
