let users = null;
let progress = null;
let cohorts = null;
let usersStats = null;
//conectamos al json de users
fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
.then(response => response.json())
.then(usersJSON => {
	users = usersJSON;
	//console.log(users);
	jsonOk();
})
.catch(error => {
	console.error("No pudimos obtener usuarios");
	console.error("ERROR > " + error.stack);
});
//conectamos al json de progress
fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
.then(response => response.json())
.then(progressJSON => {
	progress = progressJSON;
	//console.log(progress);
	jsonOk();
})
.catch(error => {
	console.error("No pudimos obtener el progreso");
	console.error("ERROR > " + error.stack);
});
//conectamos al json de cohorts
fetch('../data/cohorts.json')
.then(response => response.json())
.then(cohortsJSON => {
	cohorts = cohortsJSON;
	//console.log(cohorts);
	jsonOk();
})
.catch(error => {
	console.error("No pudimos obtener el listado de cohorts");
	console.error("ERROR > " + error.stack);
});

const jsonOk = () => {
	if (users && progress && cohorts) {
		//console.log(cohorts);
		const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
		//console.log(cohort);
		const courses = Object.keys(cohort.coursesIndex);
		//console.log(courses);
		usersStats = window.computeUsersStats(users, progress, courses);
	}
}