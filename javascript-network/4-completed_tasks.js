const request = require('request');
// const fs = require('fs')

const url = process.argv[2];

// request.get(url, {encoding: 'UTF-8'}).pipe(fs.createWriteStream('complete.json'))


request.get(url, {encoding: 'utf-8'}, function (error, response, body){
    try {
        const tasks = JSON.parse(body);
        const completedTasksByUser = {};
    
        tasks.forEach(task => {
          if (task.completed) {
            if (completedTasksByUser[task.userId]) {
              completedTasksByUser[task.userId]++;
            } else {
              completedTasksByUser[task.userId] = 1;
            }
          }
        });
        console.log(completedTasksByUser)
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
      }
});