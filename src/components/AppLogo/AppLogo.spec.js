import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import AppLogo from './AppLogo';

describe('<AppLogo />', () => {
  test('it should render', () => {
    const { container } = render(
      <AppLogo>
        <strong>Test</strong>Logo
      </AppLogo>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
