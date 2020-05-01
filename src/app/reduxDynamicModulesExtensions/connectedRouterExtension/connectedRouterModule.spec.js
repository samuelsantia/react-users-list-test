import { connectRouter } from 'connected-react-router';
import { getRouterModule } from './connectedRouterModule';

jest.mock('connected-react-router');

const fakeRouterReducer = (value) => value;
const fakeHistory = {};

beforeEach(() => {
  connectRouter.mockReturnValue(fakeRouterReducer);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('getRouterModule', () => {
  it('should return object id `router`', () => {
    const actual = getRouterModule(fakeHistory).id;
    const expected = 'router';

    expect(actual).toBe(expected);
  });

  it('should has reducerMap with connected router reducer', () => {
    const actual = getRouterModule(fakeHistory).reducerMap;
    const expected = { router: fakeRouterReducer };

    expect(connectRouter).toHaveBeenCalledTimes(1);
    expect(connectRouter).toHaveBeenCalledWith(fakeHistory);
    expect(actual).toEqual(expected);
  });

  it('should match snapshot', () => {
    expect(getRouterModule(fakeHistory)).toMatchSnapshot();
  });
});
