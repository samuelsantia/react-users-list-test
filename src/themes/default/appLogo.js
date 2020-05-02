import { css } from 'styled-components/macro';
import { medias } from '../utils';

export default css`
  --app-logo-font-increase: 1;
  --app-logo-rhythm-increase: 0;
  --app-logo-base-color: var(--color-dark-gray);
  --app-logo-strong-color: var(--color-light-blue);

  .dark & {
    --app-logo-base-color: var(--color-light-gray);
  }

  @media ${medias.mobile} {
    --app-logo-font-increase: 2;
    --app-logo-rhythm-increase: 1;
  }
`;
