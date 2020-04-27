import styled from 'styled-components/macro';
import {
  leader,
  trailer,
  align,
  weight,
  fontIncrease,
  rhythmIncrease,
} from '../../themes/utils/cssMixins';

/** Typography base styles using cssMixins */
const TypographyBase = styled.p`
  ${fontIncrease}
  ${rhythmIncrease}
  ${leader}
  ${trailer}
  ${align}
  ${weight}
`;

export default TypographyBase;
