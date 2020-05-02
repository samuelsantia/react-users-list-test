import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import CardHeader, { bgColors } from './CardHeader';

describe('<CardHeader />', () => {
  it('it should render', () => {
    const { container } = render(<CardHeader>Test CardHeader</CardHeader>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(Object.keys(bgColors))('should render bgc color %s', (color) => {
    const { container } = render(<CardHeader bgc={color} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
