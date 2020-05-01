import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from './configureStore';
// TODO: make theme loader to easily configure theme for the app
import GlobalStyles from '../themes/default/GlobalStyles';

const history = createBrowserHistory();
const store = configureStore(history);

/**
 * App components
 * sets providers, theme styles and initial routes
 */
function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ConnectedRouter history={history} />
    </Provider>
  );
}

export default App;
