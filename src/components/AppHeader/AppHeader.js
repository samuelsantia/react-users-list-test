import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { medias } from '../../themes/utils';

/**
 * sets display flex
 * @param {string} justify justify-content prop
 */
const basicHeaderFlex = (justify) => css`
  display: flex;
  align-items: center;
  justify-content: ${justify};
`;

/** header container */
export const HeaderWrapper = styled.header`
  ${basicHeaderFlex('space-between')};
  padding: var(--app-header-padding, 1rem);
  background-color: var(--app-header-background-color, white);
  box-shadow: var(--app-header-shadow, none);
`;

/** header left side container */
export const HeaderStartSide = styled.div`
  ${basicHeaderFlex('flex-start')};
`;

/** header center side container */
export const HeaderCenterSide = styled.div`
  display: none;

  @media ${medias.tablet} {
    ${basicHeaderFlex('center')};
    flex: 1;
  }
`;

/** header right side container */
export const HeaderEndSide = styled.div`
  ${basicHeaderFlex('flex-end')};
`;

/** Renders App main header */
function AppHeader({ start, children, end }) {
  return (
    <HeaderWrapper>
      <HeaderStartSide>{start}</HeaderStartSide>
      <HeaderCenterSide>{children}</HeaderCenterSide>
      <HeaderEndSide>{end}</HeaderEndSide>
    </HeaderWrapper>
  );
}

AppHeader.propTypes = {
  /** left content */
  start: PropTypes.node,
  /** center content */
  children: PropTypes.node,
  /** right content */
  end: PropTypes.node,
};

export default AppHeader;
