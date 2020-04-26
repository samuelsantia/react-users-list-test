import React from 'react';
import { render } from '@testing-library/react';
import styled from 'styled-components/macro';
import 'jest-styled-components';

import {
  leader,
  trailer,
  align,
  weight,
  fontIncrease,
  rhythmIncrease,
} from './cssMixins';

describe('leader', () => {
  const TestComponent = styled.div`
    ${leader}
  `;

  it('should not set margin-top if not prop leader', () => {
    const actual = render(<TestComponent />).container.firstChild;

    expect(actual).not.toHaveStyleRule('margin-top');
  });

  it('should set margin top if prop leader passed', () => {
    const actual = render(<TestComponent leader="5" />).container.firstChild;

    expect(actual).toHaveStyleRule(
      'margin-top',
      `calc(var(--scale-rhythm) * 5)`
    );
  });
});

describe('trailer', () => {
  const TestComponent = styled.div`
    ${trailer}
  `;

  it('should not set margin-bottom if not prop trailer', () => {
    const actual = render(<TestComponent />).container.firstChild;

    expect(actual).not.toHaveStyleRule('margin-bottom');
  });

  it('should set margin bottom if prop trailer passed', () => {
    const actual = render(<TestComponent trailer="5" />).container.firstChild;

    expect(actual).toHaveStyleRule(
      'margin-bottom',
      `calc(var(--scale-rhythm) * 5)`
    );
  });
});

describe('align', () => {
  const TestComponent = styled.div`
    ${align}
  `;

  it('should not set text-align if not prop align', () => {
    const actual = render(<TestComponent />).container.firstChild;

    expect(actual).not.toHaveStyleRule('text-align');
  });

  it('should set text-align if prop align passed', () => {
    const actual = render(<TestComponent align="justify" />).container
      .firstChild;

    expect(actual).toHaveStyleRule('text-align', 'justify');
  });
});

describe('weight', () => {
  const TestComponent = styled.div`
    ${weight}
  `;

  test('should set default weight if no passed', () => {
    const actual = render(<TestComponent />).container.firstChild;

    expect(actual).toHaveStyleRule(
      'font-weight',
      'var(--weight-normal,normal)'
    );
  });

  test('should set bold weight', () => {
    const actual = render(<TestComponent weight="bold" />).container.firstChild;

    expect(actual).toHaveStyleRule('font-weight', 'var(--weight-bold,bold)');
  });
});

describe('fontIncrease', () => {
  const TestComponent = styled.div`
    ${fontIncrease}
  `;

  it('should not set --font-increase variable if not prop fontIncrease', () => {
    const actual = render(<TestComponent />).container.firstChild;

    expect(actual).not.toHaveStyleRule('--font-increase');
  });

  it('should set --font-increase if prop fontIncrease passed', () => {
    const actual = render(<TestComponent fontIncrease="5" />).container
      .firstChild;

    expect(actual).toHaveStyleRule('--font-increase', '5');
  });
});

describe('rhythmIncrease', () => {
  const TestComponent = styled.div`
    ${rhythmIncrease}
  `;

  it('should not set --rhythm-increase variable if not prop rhythmIncrease', () => {
    const actual = render(<TestComponent />).container.firstChild;

    expect(actual).not.toHaveStyleRule('--rhythm-increase');
  });

  it('should set --rhythm-increase if prop rhythmIncrease passed', () => {
    const actual = render(<TestComponent rhythmIncrease="5" />).container
      .firstChild;

    expect(actual).toHaveStyleRule('--rhythm-increase', '5');
  });
});
