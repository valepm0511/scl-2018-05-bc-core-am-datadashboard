
const usersJson= '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJson = '../data/cohorts/cohorts.json';

fetch(usersJson)
.then(response => response.json())
.then(users => {
	
		listStudents(users);
})
const listStudents = users=>{
	let NewList = [];
	users.forEach(e =>{
		
			NewList.push(e.name);
			console.log(NewList);
		
	});

	
}



 

window.computeUsersStats = (users, progress, courses) =>{
	

const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJson = '../data/cohorts.json';

var usersData = fetch(usersJson)
.then(response => response.json())
.then(users => {
	console.log(users);
	usersData = users;
	recolector();
});

var progressData = fetch(progressJson)
.then(response => response.json())
.then(progressJson => {
	const progress = Object.entries(progressJson);
	console.log(progress);
	progressData = progress;
	recolector();
});

var cohortsData = fetch(cohortsJson)
.then(response => response.json())
.then(courses => {
	console.log(courses);
	cohortsData = courses;
	recolector();
});

function recolector(){
	if(usersData && progressData && cohortsData){
		computeUsersStats(usersData, progressData, ["curso"]);
	}
}

window.computeUsersStats = (users, progress, courses) =>{

}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}