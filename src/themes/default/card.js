import { css } from 'styled-components/macro';
import { medias } from '../utils';

export default css`
  --card-direction: row;
  --card-padding: var(--scale-rhythm);
  --card-background-color: var(--foreground-color);
  --card-border-radius: calc(var(--scale-rhythm) * 2);
  --card-shadow: var(--shadow-default);

  --card-header-h-align: center;
  --card-header-v-align: center;
  --card-header-padding: var(--scale-rhythm) var(--card-padding);

  @media ${medias.tablet} {
    --card-direction: column;

    --card-header-h-align: flex-end;
  }

  @media ${medias.laptop} {
    --card-padding: calc(var(--scale-rhythm) * 2);
    --card-header-h-align: center;
  }
`;
