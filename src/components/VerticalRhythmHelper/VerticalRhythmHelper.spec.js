import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import VerticalRhythmHelper from './VerticalRhythmHelper';

let origEnv = process.env.NODE_ENV;

afterEach(() => {
  process.env.NODE_ENV = origEnv;
});

describe('<VerticalRhythmHelper />', () => {
  it('should render', () => {
    const { container } = render(<VerticalRhythmHelper />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render if NODE_ENV is `production`', () => {
    process.env.NODE_ENV = 'production';
    const { container } = render(<VerticalRhythmHelper />);

    expect(container.firstChild).toBeNull();
  });
});
