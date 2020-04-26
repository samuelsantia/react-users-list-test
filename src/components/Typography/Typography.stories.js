import React from 'react';

import Typography from './index';

export default {
  title: 'Typography',
  component: Typography,
};

export const basic = () => (
  <>
    <Typography variant="h1">h1. Hello world!</Typography>
    <Typography variant="h2">h2. Hello world!</Typography>
    <Typography variant="h3">h3. Hello world!</Typography>
    <Typography variant="h4">h4. Hello world!</Typography>
    <Typography variant="h5">h5. Hello world!</Typography>
    <Typography variant="h6">h6. Hello world!</Typography>
    <Typography>body1. Hello world!</Typography>
    <Typography variant="body2">body2. Hello world!</Typography>
  </>
);

export const withMargins = () => (
  <>
    <Typography variant="h5" trailer="1" leader="1">
      Title
    </Typography>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor
      suscipit nisl at laoreet. Quisque nisi dolor, suscipit sed laoreet et,
      vestibulum eu nunc. Phasellus imperdiet eros eget eros lacinia iaculis.
      Fusce vehicula diam est, venenatis varius mauris rutrum ut. Duis quis
      mattis ex, dictum dignissim elit. Pellentesque sit amet faucibus arcu. Sed
      vehicula leo ut turpis venenatis convallis. Nulla pellentesque nisi
      turpis, nec posuere massa condimentum non. Donec dolor ipsum, mattis at mi
      vel, vestibulum mattis mauris.
    </Typography>
  </>
);

export const nested = () => (
  <>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor
      suscipit nisl at laoreet.{' '}
      <Typography weight="bold" tag="strong" variant="body2">
        Quisque nisi dolor
      </Typography>
      , suscipit sed laoreet et, vestibulum eu nunc. Phasellus imperdiet eros
      eget eros lacinia iaculis. Fusce vehicula diam est, venenatis varius
      mauris rutrum ut. Duis quis mattis ex, dictum dignissim elit. Pellentesque
      sit amet faucibus arcu. Sed vehicula leo ut turpis venenatis convallis.
      Nulla pellentesque nisi turpis, nec posuere massa condimentum non. Donec
      dolor ipsum, mattis at mi vel, vestibulum mattis mauris.
    </Typography>
  </>
);
