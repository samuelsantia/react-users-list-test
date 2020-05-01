import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import App from './App';

describe('<App />', () => {
  it('should render', () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });
});
