import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import CardContent from './CardContent';

describe('<CardContent />', () => {
  it('should render', () => {
    const { container } = render(<CardContent>Test CardContent</CardContent>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
