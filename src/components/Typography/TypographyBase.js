import styled from 'styled-components/macro';
import {
  leader,
  trailer,
  align,
  weight,
  fontIncrease,
  rhythmIncrease,
} from './cssMixins';

/** BaseTag */
const TypographyBase = styled.p`
  ${fontIncrease}
  ${rhythmIncrease}
  ${leader}
  ${trailer}
  ${align}
  ${weight}
`;

export default TypographyBase;
