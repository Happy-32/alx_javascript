const request = require('request');

const Id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${Id}`;

request.get(url, {encoding: 'utf-8'})
.on('response', response => {
  let data = '';

  response.on('data', chunk => {
    data += chunk;
  });

  response.on('end', () => {
    try {
      const movieTitle = JSON.parse(data);
      console.log(movieTitle.title);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
});

