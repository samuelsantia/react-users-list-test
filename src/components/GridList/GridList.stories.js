import React from 'react';

import GridList from './GridList';
import Card from '../Card';
import CardHeader, { bgColors } from '../CardHeader/CardHeader';
import CardContent from '../CardContent';
import Typography from '../Typography';
import ProfileAvatar from '../ProfileAvatar';

import users from './users.fixture';

const colors = Object.keys(bgColors);

const ProfileCard = ({ text, avatar, userName, bgc }) => (
  <Card>
    <CardHeader bgc={bgc}>
      <ProfileAvatar src={avatar} alt={userName} />
    </CardHeader>
    <CardContent>
      <Typography variant="h5" tag="h2" weight="normal">
        {userName}
      </Typography>
      <Typography variant="body2">{text}</Typography>
    </CardContent>
  </Card>
);

export default {
  title: 'GridList',
  component: GridList,
};

export const basic = () => (
  <GridList>
    {users.map(({ id, first_name, last_name, email, avatar }, idx) => (
      <ProfileCard
        key={id}
        userName={`${first_name} ${last_name}`}
        text={email}
        avatar={avatar}
        bgc={colors[idx]}
      />
    ))}
  </GridList>
);
