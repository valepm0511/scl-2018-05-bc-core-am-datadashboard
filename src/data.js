window.computeUsersStats = (users, progress, courses) => {
	for(let i in users) {
		let idUsers = users[i].id;
    let progressUser = progress[idUsers];
    let tableInfo = document.getElementById('tableInfo');
    let tableExercises = document.getElementById('tableExercises');
    let tableReads = document.getElementById('tableReads');
    let tableQuizzes = document.getElementById('tableQuizzes');
    if (JSON.stringify(progressUser) === '{}') {  
    	users[i].stats = {
    		percent: 0,
    		exercises: { percent: 0, },
    		reads: { percent: 0, },
    		quizzes: {
    			percent: 0,
    			scoreAvg: 0,
    		}
    	};
    } else {
      let percentTotal = 0;
      let exercises = 0;
      let exercisesCompleted = 0;
      let exercisesPercent = 0;
      let read = 0;
      let readCompleted = 0;
      let readPercent = 0;
      let quizzes = 0;
      let quizzesCompleted = 0;
      let quizzesPercent = 0;
      let scoreSum = 0;
      let scoreAvg = 0;

      for(let i in progressUser) { 
      	let element = progressUser[i];
      	if (courses.indexOf(i) < 0) {
      		continue;
      	}

        percentTotal += element.percent / Object.keys(progressUser).length;
        for (let unit of Object.values(element.units)) { 
          for (let part of Object.values(unit.parts)) { 
            if (part.length === 0) {
            	quizzes = 0;
            	exercises = 0;
            	read = 0;
            	quizzesPercent = 0;
            	exercisesPercent = 0;
            	readPercent = 0;
            }
            if (part.type === 'quiz') { 
            	quizzes++;
            }
            if (part.type === 'quiz' && part.completed === 1) {
            	quizzesCompleted++;

              scoreSum += part.score;
            }
            quizzesPercent = Math.round((quizzesCompleted * 100 * 10 / quizzes)) / 10;
            if (part.type === 'read') {
              read++;
            }
            if (part.type === 'read' && part.completed === 1) {
              readCompleted++;
            }
            readPercent = Math.round((readCompleted * 100) / read);
            if (part.type === 'practice') {
            	exercises++;
            }
            if (part.type === 'practice' && part.completed === 1) {
            	exercisesCompleted++;
            }
            exercisesPercent = Math.round((exercisesCompleted * 100 * 10) / (exercises || 1)) / 10; 
          }
        } 
      }
      
      scoreAvg = scoreSum / quizzes;

      users[i].stats = {
      	percent: percentTotal,
      	reads: {
      		percent: readPercent,
      		total: read,
      		completed: readCompleted
      	},
      	exercises: {
      		percent: exercisesPercent,
      		total: exercises,
      		completed: exercisesCompleted
      	},
      	quizzes: {
      		percent: quizzesPercent,
      		total: quizzes,
      		completed: quizzesCompleted,
      		scoreAvg: scoreAvg,
      		scoreSum: scoreSum
      	}
      };

      tableInfo.innerHTML += "<tr><td>"+users[i].id+"</td><td>"+users[i].name+"</td><td>"+users[i].stats.percent+"</td></tr>";
      tableExercises.innerHTML += "<tr><td>"+users[i].name+"</td><td>"+users[i].stats.exercises.total+"</td><td>"+users[i].stats.exercises.completed+"</td><td>"+users[i].stats.exercises.percent+"</td></tr>";
      tableReads.innerHTML += "<tr><td>"+users[i].name+"</td><td>"+users[i].stats.reads.total+"</td><td>"+users[i].stats.reads.completed+"</td><td>"+users[i].stats.reads.percent+"</td></tr>";
      tableQuizzes.innerHTML += "<tr><td>"+users[i].name+"</td><td>"+users[i].stats.quizzes.total+"</td><td>"+users[i].stats.quizzes.completed+"</td><td>"+users[i].stats.quizzes.percent+"</td><td>"+users[i].stats.quizzes.scoreSum+"</td><td>"+users[i].stats.quizzes.scoreAvg+"</td></tr>";
      //console.log(users[i].name);
    }
  }
  return users;
}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}