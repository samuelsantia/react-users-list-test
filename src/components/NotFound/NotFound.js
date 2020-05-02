import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../Typography';

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80%; /* not 100% vertical center */

  h1 {
    --font-increase: 10;
    --rhythm-increase: 3;
    color: var(--color-red);
  }
`;

function NotFound() {
  return (
    <NotFoundWrapper>
      <div>
        <Typography variant="h1" weight="bold">
          404
        </Typography>
        <Typography>Page not found</Typography>
      </div>
    </NotFoundWrapper>
  );
}

export default NotFound;
