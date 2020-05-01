import { routerMiddleware } from 'connected-react-router';
import { getRouterModule } from './connectedRouterModule';
import { getConnectedRouterExtension } from './connectedRouterExtension';

jest.mock('connected-react-router');
jest.mock('./connectedRouterModule');

const fakeRouterMiddleware = (value) => value;
const fakeHistory = {};
const fakeRouterModule = {};

beforeEach(() => {
  routerMiddleware.mockReturnValue(fakeRouterMiddleware);
  getRouterModule.mockReturnValue(fakeRouterModule);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('getConnectedRouterExtension', () => {
  it('should return the routerMiddleware in middleware option', () => {
    const actual = getConnectedRouterExtension(fakeHistory).middleware;
    const expected = [fakeRouterMiddleware];

    expect(routerMiddleware).toHaveBeenCalledTimes(1);
    expect(routerMiddleware).toHaveBeenCalledWith(fakeHistory);
    expect(actual).toEqual(expected);
  });

  it('should add router module onModuleManagerCreated', () => {
    const addModuleMock = jest.fn();
    const moduleManager = { addModule: addModuleMock };

    const { onModuleManagerCreated } = getConnectedRouterExtension(fakeHistory);
    onModuleManagerCreated(moduleManager);

    expect(getRouterModule).toHaveBeenCalledTimes(1);
    expect(getRouterModule).toHaveBeenCalledWith(fakeHistory);

    expect(addModuleMock).toHaveBeenCalledTimes(1);
    expect(addModuleMock).toHaveBeenCalledWith(getRouterModule(fakeHistory));
  });

  it('should match snapshot', () => {
    expect(getConnectedRouterExtension(fakeHistory)).toMatchSnapshot();
  });
});
