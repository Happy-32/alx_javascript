const request = require('request');

const Id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${Id}`;


request.get(url, {encoding: 'utf-8'}, function (error, response,body){
  const movie = JSON.parse(body)
  console.log(movie.title)
});

