//   let parts = [];
  //   courses_progress.forEach((course) => { //itera por el progreso de cada curso
  //     const parts_aux = Object.keys(course.units).map((key) => { // aplanar parts
  //     	return Object.keys(course.units[key].parts).map((key_parts) => {
  //     		return course.units[key].parts[key_parts]
  //     	});
  //     });
  //     parts = parts.concat.apply([], parts_aux);
  //   });

  //   let exercises = [];
  //   const exercisesObject = parts.filter((part) => {return part.type === 'practice'})
  //   .filter(practice => practice.exercises !== undefined)
  //   .map(practice => practice.exercises);
  //   exercisesObject.forEach((exercise) => {
  //   	const exercises_aux = Object.keys(exercise).map((key) => {
  //   		return exercise[key];
  //   	});
  //   	exercises = exercises.concat.apply([], exercises_aux);
  //   }); //retorna array con parts tipo practice (exercises)
  //   const reads = parts.filter((part) => {return part.type === 'read'});//retorna array con parts tipo read
  //   const quizzes = parts.filter((part) => {return part.type === 'quiz'});//retorna array con parts tipo quiz

  //   users[i].stats = { //le asigna a el usuario un objeto llamado stats
  //   	exercises: {
  //       total: exercises.length, //total de exercises
  //       completed: exercises.filter(excercise => excercise.completed === 1).length //filtra solo exercises completados y los cuenta
  //     },
  //     reads: {
  //       total: reads.length, //total reads
  //       completed: reads.filter(read => read.completed === 1).length //cuenta solo reads completados
  //     },
  //     quizzes: {
  //       total: quizzes.length, //total quiz
  //       completed: quizzes.filter(quiz => quiz.completed === 1).length, //cuenta solo quiz completados
  //       scoreSum: quizzes.reduce((previous, current) => { //sumatoria de puntaje (score)
  //       	let score = 0;
  //       	if(current.score !== undefined){
  //       		score = current.score;
  //       	}
  //       	return previous + score}, 0),
  //     }
  //   };

  //   users[i].stats.exercises.percent = Math.round(users[i].stats.exercises.completed / users[i].stats.exercises.total * 100);
  //   users[i].stats.reads.percent = Math.round(users[i].stats.reads.completed / users[i].stats.reads.total * 100);
  //   users[i].stats.quizzes.percent = Math.round(users[i].stats.quizzes.completed / users[i].stats.quizzes.total * 100);
  //   users[i].stats.quizzes.scoreAvg = Math.round(users[i].stats.quizzes.scoreSum / users[i].stats.quizzes.completed)
  //   users[i].stats.percent = courses_progress.reduce((previous, current) => { //recorre cada progreso de curso y calcula su procentaje
  //   	return previous + current.percent;
  //   }, 0) / courses.length
  // }

  // return users;


  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(usersJSON => {
    users = usersJSON;
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
    .then(response => response.json())
    .then(progressJSON => {
      progress = progressJSON;
      fetch('../data/cohorts.json')
      .then(response => response.json())
      .then(cohortJSON => {
        cohort = cohortJSON;
        console.log(cohort);
      });
    });
    window.computeUsersStats(users, progress, cohort);
  });