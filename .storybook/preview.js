import React, { useState } from 'react';
import styled from 'styled-components';
import { addDecorator } from '@storybook/react';
import GlobalStyles from '../src/themes/default/GlobalStyles';
import VerticalRhythmHelper from '../src/components/VerticalRhythmHelper';

const FloatingButton = styled.button`
  position: fixed;
  right: var(--scale-rhythm);
  bottom: var(--scale-rhythm);
`

addDecorator(storyFn => {
  const [showVerticalGrid, setShowVerticalGrid] = useState(true);

  return (
    <>
      <GlobalStyles />
      {showVerticalGrid && <VerticalRhythmHelper />}
      <FloatingButton onClick={() => setShowVerticalGrid(!showVerticalGrid)}>Toggle Vertical Grid</FloatingButton>
      {storyFn()}
    </>
  );
})
