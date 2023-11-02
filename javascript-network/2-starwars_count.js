const request = require('request');

// const Id = process.argv[2];
const id = 18;
const url = process.argv[2];


request.get(url, function (error, response, body){

  try {
    const films = JSON.parse(body).results;
    const has_Wedge = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`));
    const numberofmovies = has_Wedge.length;
    
    console.log(numberofmovies);
  } catch (parseError){
    console.error('Error while parsing JSON: ', parseError);
  }

});
