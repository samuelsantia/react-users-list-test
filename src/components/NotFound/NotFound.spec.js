import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should match snapshot', () => {
    const { container } = render(<NotFound />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should has content `Page not found` by default', () => {
    const { getByText } = render(<NotFound />);

    getByText(/Page not found/i);
  });

  it('should can change message through children', () => {
    const { getByText } = render(<NotFound>User not found</NotFound>);

    getByText(/User not found/i);
  });
});
