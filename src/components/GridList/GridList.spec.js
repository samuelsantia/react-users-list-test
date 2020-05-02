import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import GridList from './GridList';

describe('<GridList />', () => {
  it('should render', () => {
    const { container } = render(<GridList>Test GridList</GridList>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
