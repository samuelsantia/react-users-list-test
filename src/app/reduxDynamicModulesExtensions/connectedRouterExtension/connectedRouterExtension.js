import { routerMiddleware } from 'connected-react-router';
import { getRouterModule } from './connectedRouterModule';

/**
 * creates redux-dynamic-modules router extension
 * that register the middleware and load the router module
 * @param {History} history router history
 * @return {Object} extension config
 */
export const getConnectedRouterExtension = (history) => ({
  // adds router middleware to redux-dynamic-modules store
  middleware: [routerMiddleware(history)],
  onModuleManagerCreated: (moduleManager) => {
    // adds router module to redux-dynamic-modules
    moduleManager.addModule(getRouterModule(history));
  },
});
