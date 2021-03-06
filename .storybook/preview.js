import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import GlobalStyles from '../src/themes/default/GlobalStyles';
import VerticalRhythmHelper from '../src/components/VerticalRhythmHelper';

const FloatingButtonsContainer = styled.div`
  position: fixed;
  right: var(--scale-rhythm);
  bottom: var(--scale-rhythm);
`
const FloatingButton = styled.button`
  margin-left: calc(var(--scale-rhythm) / 2);
`

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addDecorator(storyFn => {
  const [showVerticalGrid, setShowVerticalGrid] = useState(false);
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <GlobalStyles />
      {showVerticalGrid && <VerticalRhythmHelper />}
      <FloatingButtonsContainer>
        <FloatingButton onClick={() => setShowVerticalGrid(!showVerticalGrid)}>Toggle Vertical Grid</FloatingButton>
        <FloatingButton onClick={() => setDarkMode(!darkMode)}>Toggle dark mode</FloatingButton>
      </FloatingButtonsContainer>
      {storyFn()}
    </>
  );
})
