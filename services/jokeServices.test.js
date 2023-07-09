const { jokeService, jokeServiceById } = require('./jokeServices');
const axios = require('axios');

//test if joke returns a type
describe('Joke service test', () => {
  test('Should return a joke', async () => {
    const result = await jokeService();
    expect(result.data.type).toBeOneOf('programming', 'general');
  });
  test('Should return joke id', async () => {
    const result = await jokeServiceById(2);
    expect(result.data.id).toEqual(2);
  });
});
