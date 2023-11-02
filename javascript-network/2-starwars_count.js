const request = require('request');

// const Id = process.argv[2];
const id = 18;
const url = process.argv[2];


// request.get(url, function (error, response, body){

//   try {
//     const films = JSON.parse(body).results;
//     const has_Wedge = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`));
//     const numberofmovies = has_Wedge.length;
    
//     console.log(numberofmovies);
//   } catch (parseError){
//     console.error('Error while parsing JSON: ', parseError);
//   }

// });



const apiUrl = process.argv[2]; // Get the API URL from the command line argument

// Character ID for "Wedge Antilles"
const wedgeAntillesId = 18;

// Make an API request to get the list of films
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    return;
  }

  const filmsData = JSON.parse(body);
  const wedgeAntillesMovies = filmsData.results.filter((film) =>
    film.characters.includes(apiUrl + 'people/' + wedgeAntillesId + '/')
  );

  console.log(wedgeAntillesMovies.length);
});



// request.get(`https://swapi-api.alx-tools.com/api/people/${id}/`, {encoding: 'utf-8'}, function(error, response, body){
//   try{
//     has_wedge = JSON.parse(body)
//     console.log(has_wedge.films.length)
//   } catch(parseError){
//     console.log('Error while parsing JSON: ', parseError);
//   }
// });