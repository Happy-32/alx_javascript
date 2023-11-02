function studentHogwarts() {
    let privateScore = 0;
    let name = null;
  
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    return {
      setName: function(newName) {
        name = newName;
        return name;
      },
      rewardStudent: function() {
        changeScoreBy(1);
      },
      penalizeStudent: function() {
        changeScoreBy(-1);
      },
      getScore: function() {
        return `${name}: ${privateScore}`;
      }
    };
  }
  
  const harry = studentHogwarts();
  harry.setName('Harry');
  for (let i = 1; i <= 4; i++) {
    harry.rewardStudent();
  }
  
  console.log(harry.getScore());
  
  const draco = studentHogwarts();
  draco.setName('Draco')
  draco.rewardStudent();
  for (let j = 1; j <= 3; j++) {
    draco.penalizeStudent();
  }
  
  console.log(draco.getScore());
  