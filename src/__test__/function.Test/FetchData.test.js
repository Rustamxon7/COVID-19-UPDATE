import { fetchPostsRequestHistory } from '../../redux/covid-19/covidHistory';

describe('Test if fetchPostsRequestHistory', () => {
  test('fetch the data', async () => {
    const data = await fetchPostsRequestHistory();
    expect(data).toBeInstanceOf(Object);
  });
  test('recieved data contain object', async () => {
    const data = await fetchPostsRequestHistory();
    expect.objectContaining(data);
  });
});
