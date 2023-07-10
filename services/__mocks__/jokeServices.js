const axios = require('axios');
require('dotenv').config();

//api url requires /random
const jokeService = async () => {
  console.log('Joke Mocked');
  return Promise.resolve({
    data: {
      type: 'general',
      setup: 'What did the shy pebble wish for?',
      punchline: 'That she was a little boulder.',
      id: 186,
    },
  });
};

//For joke by id GET cannot have /random
//api url != /random replace with /:id
const jokeServiceById = async (id) => {
  console.log('Joke by id Mocked');
  return Promise.resolve({
    data: {
      type: 'general',
      setup: 'How do you make a tissue dance?',
      punchline: 'You put a little boogie on it.',
      id: 2,
    },
  });
};

module.exports = { jokeService, jokeServiceById };
