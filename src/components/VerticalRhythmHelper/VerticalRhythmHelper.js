import React from 'react';
import styled from 'styled-components/macro';

/** shows vertical base grid */
export const VerticalRhythmHelperBase = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  user-select: none;
  background: linear-gradient(rgba(0, 119, 179, 0.2) 1px, transparent 1px) left
    top / var(--scale-rhythm) var(--scale-rhythm);
`;

/**
 * shows vertical base grid
 * dont renders in production environments
 */
export default function VerticalRhythmHelper(props) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  return <VerticalRhythmHelperBase {...props} />;
}
