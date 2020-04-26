import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import TypographyBase from './TypographyBase';

/** default props for variants */
export const variantsDefaults = {
  h1: {
    as: 'h1',
    fontIncrease: 'var(--typo-h1-increase, 5)',
    rhythmIncrease: 'var(--typo-h1-rhythm, 2)',
  },
  h2: {
    as: 'h2',
    fontIncrease: 'var(--typo-h2-increase, 4)',
    rhythmIncrease: 'var(--typo-h2-rhythm, 1)',
  },
  h3: {
    as: 'h3',
    fontIncrease: 'var(--typo-h3-increase, 3)',
    rhythmIncrease: 'var(--typo-h3-rhythm, 1)',
  },
  h4: {
    as: 'h4',
    fontIncrease: 'var(--typo-h4-increase, 2)',
    rhythmIncrease: 'var(--typo-h4-rhythm, 1)',
  },
  h5: {
    as: 'h5',
    fontIncrease: 'var(--typo-h5-increase, 1)',
    rhythmIncrease: 'var(--typo-h5-rhythm, 0)',
    weight: 'bold',
  },
  h6: {
    as: 'h6',
    fontIncrease: 'var(--typo-h6-increase, 0)',
    rhythmIncrease: 'var(--typo-h6-rhythm, 0)',
    weight: 'bold',
  },
  body1: {
    as: 'p',
    fontIncrease: 'var(--typo-body1-increase, 0)',
    rhythmIncrease: 'var(--typo-body1-rhythm, 0)',
  },
  body2: {
    as: 'p',
    fontIncrease: 'var(--typo-body2-increase, -.25)',
    rhythmIncrease: 'var(--typo-body2-rhythm, 0)',
  },
};

/** Renders a component with typography styles */
const Typography = forwardRef(({ tag, variant = 'body1', ...rest }, ref) => {
  const props = {
    ...variantsDefaults[variant],
    ...rest,
  };
  const as = tag || props.as;

  return <TypographyBase {...props} as={as} ref={ref} />;
});

const stringOrNumberType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

Typography.propTypes = {
  /** component to render */
  tag: PropTypes.elementType,
  /** typograpgy variant */
  variant: PropTypes.oneOf(Object.keys(variantsDefaults)),
  /** number of margin top vertical rhythm lines */
  leader: stringOrNumberType,
  /** number of margin bottom vertical rhythm lines */
  trailer: stringOrNumberType,
  /** component text-align */
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  /** component text-weight */
  weight: PropTypes.oneOf(['normal', 'bold']),
};

export default Typography;
