import { css } from 'styled-components/macro';
import { medias } from '../utils';

export default css`
  --grid-gap: var(--scale-rhythm);
  --grid-margin: var(--grid-gap);

  @media ${medias.mobile} {
    --grid-columns: 1fr 1fr;
  }

  @media ${medias.tablet} {
    --grid-gap: calc(var(--scale-rhythm) * 2);
    --grid-columns: 1fr 1fr 1fr;
  }

  @media ${medias.desktop} {
    --grid-gap: calc(var(--scale-rhythm) * 2);
    --grid-columns: 1fr 1fr 1fr 1fr;
  }
`;
