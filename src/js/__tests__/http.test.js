import getLevel from '../getLevel';
import httpGet from '../http';
import nock from "nock";
jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});
test('http get have been called with correct argument', () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    getLevel(1);
    expect(httpGet).toHaveBeenCalledWith('https://server/user/1');
    getLevel(2);
    expect(httpGet).toHaveBeenCalledWith('https://server/user/2');
})

// describe('some  test', function(){
//     it('success request', ()=>{
//         nock('https://server/user')
//         .get('/t')
//         .reply(200, {data: {level: 1}});
//         expect
//     })
// })