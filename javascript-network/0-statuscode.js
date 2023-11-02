const request = require('request');

const url = process.argv[2];

request.get(url, {encoding: 'utf8'}, function (error, response, body){
console.log(response.statusCode)
});
