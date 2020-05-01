import { connectRouter } from 'connected-react-router';

/**
 * redux-dynamic-moduler router module
 * loads the router reducer
 * @param {History} history router history
 * @return {Object} router module config
 */
export const getRouterModule = (history) => ({
  id: 'router',
  reducerMap: {
    router: connectRouter(history),
  },
});
