import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { getConnectedRouterExtension } from './reduxDynamicModulesExtensions/connectedRouterExtension';

import configureStore from './configureStore';

jest.mock('redux-dynamic-modules');
jest.mock('redux-dynamic-modules-saga');
jest.mock('./reduxDynamicModulesExtensions/connectedRouterExtension');

const fakeHistory = { id: 'fakeHistory' };
const fakeStore = { id: 'fakeStore' };
const fakeSagaExtension = { id: 'fakeSagaExtension' };
const fakeRouterExtension = { id: 'fakeRouterExtension' };

beforeEach(() => {
  createStore.mockReturnValue(fakeStore);
  getSagaExtension.mockReturnValue(fakeSagaExtension);
  getConnectedRouterExtension.mockReturnValue(fakeRouterExtension);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('configureStore', () => {
  it('should return configured store', () => {
    const actual = configureStore(fakeHistory);

    expect(createStore).toHaveBeenCalledTimes(1);
    expect(createStore).toHaveBeenCalledWith({
      initialState: {},
      enhancers: [],
      extensions: [fakeSagaExtension, fakeRouterExtension],
    });
    expect(actual).toBe(fakeStore);
  });

  it('should configure connected router extension with history', () => {
    configureStore(fakeHistory);

    expect(getConnectedRouterExtension).toHaveBeenCalledTimes(1);
    expect(getConnectedRouterExtension).toHaveBeenCalledWith(fakeHistory);
  });

  it('should accept initialState and rootModules', () => {
    const initialState = { id: 'initialState' };
    const rootModules = [{ id: 'testModule-1' }, { id: 'testModule-2' }];

    configureStore(fakeHistory, initialState, rootModules);
    expect(createStore).toHaveBeenCalledWith(
      expect.objectContaining({ initialState }),
      ...rootModules
    );
  });
});
