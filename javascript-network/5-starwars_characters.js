const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, { encoding: 'utf-8' }, function (error, response, body) {
  try {
    const movie = JSON.parse(body);
    const characters = movie.characters;

    characters.forEach(characterUrl => {
      request.get(characterUrl, { encoding: 'utf-8' }, (error, response, body) => {
        if (error) {
          console.error('Error:', error);
          return;
        }

        if (response.statusCode !== 200) {
          console.error('API request failed with status code:', response.statusCode);
          return;
        }

        try {
          const character = JSON.parse(body);
          console.log(character.name);
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError);
        }
      });
    });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
