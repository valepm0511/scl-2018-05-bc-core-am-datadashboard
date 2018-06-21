

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

//guardando en un arreglo y pushando
const nameUsers = (users) =>{
	let usersArray = [];
	users.forEach(element => {
		usersArray.push(element.name);
	});
	console.log(usersArray);
}

var progressData = fetch(progressJson)
.then(response => response.json())
.then(progressJson => {
	const progress = Object.entries(progressJson);
	progressData = progress;
	recolector();
});


var cohortsData = fetch(cohortsJson)
.then(response => response.json())
.then(courses => {
	cohortsData = courses;
	recolector();
	nameCourse(courses);
});

const nameCourse = (courses) =>{
	let coursesArray = [];
	courses.forEach(element => {
		coursesArray.push(element.coursesIndex);
	});
	console.log(coursesArray);
}



function recolector(){
	if(usersData && progressData && cohortsData){
		computeUsersStats(usersData, progressData, ["curso"]);
	}
}

//Recorriendo objetos de progress


window.computeUsersStats = (users, progress, courses) =>{

}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}