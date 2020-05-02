import React from 'react';

import Typography from '../Typography';
import AppHeader from './AppHeader';

export default {
  title: 'AppHeader',
  component: AppHeader,
};

export const basic = () => (
  <AppHeader
    start={
      <Typography variant="h2">
        <Typography variant="h2" tag="strong" weight="bold">
          App
        </Typography>
        Logo
      </Typography>
    }
    end={
      <Typography variant="h6" tag="p">
        pedro@email.com
      </Typography>
    }
  >
    <Typography variant="h5">Center Content</Typography>
  </AppHeader>
);
