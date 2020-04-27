import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { switchBgc } from '../../themes/utils';

/** header background possible colors */
export const bgColors = {
  purple: 'var(--color-purple)',
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  yellow: 'var(--color-yellow)',
  green: 'var(--color-green)',
  lightBlue: 'var(--color-light-blue)',
  darkBlue: 'var(--color-dark-blue)',
};

/** renders header for a card */
const CardHeader = styled.header`
  ${switchBgc(bgColors)};
  display: flex;
  justify-content: var(--card-header-h-align, center);
  align-items: var(--card-header-v-align, center);
  padding: var(--card-header-padding, 1rem);
`;

CardHeader.propTypes = {
  /** background color */
  bg: PropTypes.oneOf(Object.keys(bgColors)),
};

export default CardHeader;
