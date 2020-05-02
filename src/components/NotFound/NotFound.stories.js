import React from 'react';
import styled from 'styled-components/macro';

import NotFound from './NotFound';

const StoryWrapper = styled.div`
  height: 50vh;
  z-index: -1;
`;

export default {
  title: 'NotFound',
  component: NotFound,
  decorators: [(storyFn) => <StoryWrapper>{storyFn()}</StoryWrapper>],
};

export const basic = () => <NotFound />;

export const withCustomText = () => <NotFound>Custom not found text</NotFound>;
