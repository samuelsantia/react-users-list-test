import React from 'react';

import Typography from '../Typography';
import AppLogo from '../AppLogo';
import AppHeader from './AppHeader';

export default {
  title: 'AppHeader',
  component: AppHeader,
  subcomponents: { AppLogo },
};

export const basic = () => (
  <AppHeader
    start={
      <AppLogo>
        <strong>App</strong>Logo
      </AppLogo>
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
