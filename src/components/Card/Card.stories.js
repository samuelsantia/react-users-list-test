import React from 'react';
import styled from 'styled-components/macro';

import Card from './index';
import CardHeader from '../CardHeader';
import CardContent from '../CardContent';
import Typography from '../Typography';
import ProfileAvatar from '../ProfileAvatar';

const StoryDecorator = styled.div`
  padding: var(--scale-rhythm);
`;

export default {
  title: 'Card',
  component: Card,
  subcomponents: { CardHeader, CardContent, Typography, ProfileAvatar },
  decorators: [(storyFn) => <StoryDecorator>{storyFn()}</StoryDecorator>],
};

export const basic = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" tag="h2" trailer="1" weight="normal">
        Title
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor
        suscipit nisl at laoreet. Quisque nisi dolor, suscipit sed laoreet et,
        vestibulum eu nunc. Phasellus imperdiet eros eget eros lacinia iaculis.
        Fusce vehicula diam est, venenatis varius mauris rutrum ut. Duis quis
        mattis ex, dictum dignissim elit. Pellentesque sit amet faucibus arcu.
        Sed vehicula leo ut turpis venenatis convallis. Nulla pellentesque nisi
        turpis, nec posuere massa condimentum non. Donec dolor ipsum, mattis at
        mi vel, vestibulum mattis mauris.
      </Typography>
    </CardContent>
  </Card>
);

export const withHeader = () => (
  <Card>
    <CardHeader bgc="orange">
      <ProfileAvatar
        src="https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        alt="Test Profile"
      />
    </CardHeader>
    <CardContent>
      <Typography variant="h5" tag="h2" trailer="1" weight="normal">
        Title
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </CardContent>
  </Card>
);
