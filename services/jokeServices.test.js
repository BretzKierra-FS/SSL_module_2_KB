const { jokeService, jokeServiceById } = require('./jokeServices');
const axios = require('axios');
//added jest-matcher-one-of function toBeONeOf() allows jest to test more than one value
const jest_matcher = require('jest-matcher-one-of');

jest.mock('./jokeServices')

describe('Joke service test', () => {
  test('Should return a joke', async () => {
    const result = await jokeService();
    expect(result.data.type).toBeOneOf([
      'programming',
      'general',
      'knock-knock',
    ]);
  });
  test('Should return joke id', async () => {
    const result = await jokeServiceById(2);
    expect(result.data.id).toEqual(2);
    expect(result.data.type).toEqual('general');
    expect(result.data.setup).toContain('How do you');
    expect(result.data.punchline).toContain('You put a little');
  });
});
