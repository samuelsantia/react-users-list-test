import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from './configureStore';
// TODO: make theme loader to easily configure theme for the app
import GlobalStyles from '../themes/default/GlobalStyles';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../components/NotFound';
import AppLayout from '../containers/AppLayout';

const history = createBrowserHistory();
const store = configureStore(history);

const appRootRoutes = ['/users'];

/**
 * App components
 * sets providers, theme styles and initial routes
 */
function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={appRootRoutes} component={AppLayout} />
          <Redirect from="/" to="/users" exact />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
