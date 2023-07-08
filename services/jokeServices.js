const axios = require('axios');
require('dotenv').config();

//api url requires /random
const jokeService = async () => {
  console.log('Joke');
  return await axios.get(`${process.env.url}/random`);
};

//For joke by id GET cannot have /random
//api url != /random replace with /:id
const jokeServiceById = async (id) => {
  console.log('Joke by id');
  return await axios.get(`${process.env.url}/${id}`);
};

module.exports = { jokeService, jokeServiceById };
