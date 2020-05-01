import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { getConnectedRouterExtension } from './reduxDynamicModulesExtensions/connectedRouterExtension';

/**
 * creates a redux store with redux-dynamic-modules
 * to use code splitting in reducers and sagas
 * @param {History} history router history
 * @param {Object} [initialState={}] initial store state
 * @param {Array.<Module>} [rootModules=[]] root loaded modules
 * @returns {Store} redux store
 * @see {@link https://redux-dynamic-modules.js.org/ redux-dynamic-modules} for more information
 */
export default function configureStore(
  history,
  initialState = {},
  rootModules = []
) {
  // enhancers to add
  const enhancers = [];
  // extensions to loads
  const extensions = [getSagaExtension(), getConnectedRouterExtension(history)];

  return createStore(
    {
      initialState,
      enhancers,
      extensions,
    },
    ...rootModules
  );
}
