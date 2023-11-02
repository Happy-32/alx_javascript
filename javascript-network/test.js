const request = require('request');
const id = 18;

// const Id = process.argv[2];
// const url = `https://swapi-api.alx-tools.com/api/films/${Id}`;

// request.get(url, {encoding: 'utf-8'})
// .on('response', response => {
//   let data = '';

//   response.on('data', chunk => {
//     data += chunk;
//   });

//   response.on('end', () => {
//     try {
//       const movieTitle = JSON.parse(data);
//       console.log(movieTitle.title);
//     } catch (error) {
//       console.error('Error parsing JSON:', error);
//     }
//   });
// });




// const movieId = process.argv[2];
// const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// request.get(url, { encoding: 'utf-8' }, (error, response, body) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     const movie = JSON.parse(body);
//     // console.log(movie.title);
//     console.log(response)
//   }
// });


request.get(`https://swapi-api.alx-tools.com/api/people/${id}/`, {encoding: 'utf-8'}, function(error, response, body){
  has_wedge = JSON.parse(body)
  console.log(has_wedge.films.length)

})