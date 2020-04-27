import { css } from 'styled-components/macro';
import { medias } from '../utils';

export default css`
  --profile-avatar-size: calc(var(--scale-rhythm) * 2);
  --profile-avatar-shadow: var(--shadow-default);

  @media ${medias.mobile} {
    --profile-avatar-size: calc(var(--scale-rhythm) * 3);
  }

  @media ${medias.laptop} {
    --profile-avatar-size: calc(var(--scale-rhythm) * 5);
  }

  @media ${medias.desktop} {
    --profile-avatar-size: calc(var(--scale-rhythm) * 6);
  }
`;
