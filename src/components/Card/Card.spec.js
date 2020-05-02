import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Card from './Card';

describe('<Card />', () => {
  it('should render', () => {
    const { container } = render(<Card>Test Card</Card>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
