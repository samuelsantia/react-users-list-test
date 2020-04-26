import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import TypographyBase from './TypographyBase';
import Typogrpahy, { variantsDefaults } from './Typography';

jest.mock('./TypographyBase', () => {
  return jest.fn(() => null);
});

afterEach(() => {
  TypographyBase.mockClear();
});

describe('<Typography />', () => {
  it('should render <TypographyBase />', () => {
    render(<Typogrpahy />);

    expect(TypographyBase).toHaveBeenCalledTimes(1);
  });

  it('should can define component with tag prop', () => {
    const expectedProps = expect.objectContaining({ as: 'strong' });
    render(<Typogrpahy tag="strong" />);

    expect(TypographyBase).toHaveBeenCalledWith(expectedProps, {});
  });

  describe.each(Object.entries(variantsDefaults))(
    'variant %s',
    (variant, defaultProps) => {
      it('should pass default variant props', () => {
        render(<Typogrpahy variant={variant} />);

        expect(TypographyBase).toHaveBeenCalledWith(defaultProps, {});
      });

      it('should merge props with defaults', () => {
        render(<Typogrpahy variant={variant} as="span" title="test" />);
        const expectedProps = {
          ...defaultProps,
          title: 'test',
          as: 'span',
        };
        expect(TypographyBase).toHaveBeenCalledWith(expectedProps, {});
      });
    }
  );
});
