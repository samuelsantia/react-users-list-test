import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should match snapshot', () => {
    const { container } = render(<NotFound />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
