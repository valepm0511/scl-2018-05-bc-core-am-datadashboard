//guardando en variables las url
const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJson = '../data/cohorts.json';
//guardando promesa usuario
let usersData = fetch(usersJson)
.then(response => response.json())
.then(users => {
	usersData = users;
	
	nameUsers(users);
});
//guardando en un arreglo y pushando de usuario
const nameUsers = (users) =>{
	let usersArray = [];
	users.forEach(element => {
		usersArray.push(element.name);
	});
	document.write(usersArray);
}
//guardando promesa progress
let progressData = fetch(progressJson)
.then(response => response.json())
.then(progressJson => {
	const progress = Object.entries(progressJson);
	progressData = progress;
	//console.log (progressData);
	
});

for(var i in progressData){
	//imprime todo el arreglo
	console.log(progressData[i]['intro']['units']);
//recorre intro
console.log(Object.keys(progressData[i]['intro']['units']))

//recorre todas las unidades
for(var x in progressData[i]['intro']){
	console.log(x);
}
}

//guardando promesa cursos
let cohortsData = fetch(cohortsJson)
.then(response => response.json())
.then(courses => {
	cohortsData = courses;
	nameCourse(courses);
});
//guardando en un arreglo y pushando de curso
const nameCourse = (courses) =>{
	let coursesArray = [];
	courses.forEach(element => {
		coursesArray.push(element.coursesIndex);
	});
	//console.log(coursesArray);
}



window.computeUsersStats = (users, progress, courses) =>{

	
}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}