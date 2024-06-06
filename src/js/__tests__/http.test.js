import getLevel from '../getLevel';
import httpGet from '../http';
jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});
test('get level', () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    getLevel(1);
    expect(httpGet).toHaveBeenCalledWith('https://server/user/1');
    getLevel(2);
    expect(httpGet).toHaveBeenCalledWith('https://server/user/2');
})