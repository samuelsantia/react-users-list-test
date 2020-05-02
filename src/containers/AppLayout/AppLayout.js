import React from 'react';

import AppHeader from '../../components/AppHeader';
import AppLogo from '../../components/AppLogo';

/** renders application main layout and app routes */
function AppLayout() {
  const appLogo = (
    <AppLogo>
      <strong>Users</strong>List
    </AppLogo>
  );
  return (
    <>
      <AppHeader start={appLogo} />
      <main></main>
    </>
  );
}

export default AppLayout;
