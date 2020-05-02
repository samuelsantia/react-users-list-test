import styled from 'styled-components/macro';

/** Renders App Logo */
const AppLogo = styled.h1`
  --font-increase: var(--app-logo-font-increase, 3);
  --rhythm-increase: var(--app-logo-rhythm-increase, 2);
  text-transform: uppercase;
  font-weight: lighter;
  color: var(--app-logo-base-color, inherit);

  strong {
    font-weight: bold;
    color: var(--app-logo-strong-color, inherit);
  }
`;

export default AppLogo;
