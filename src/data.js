
var users = null;
var progress = null;
var cohorts = null;

const usersData= '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressData = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsData= '../data/cohorts.json';

//PARA CONSEGUIR NOMBRES DE LAS ALUMNAS
/*const listStudents = users=>{
	let NewList = [];
	users.forEach(e =>{
		NewList.push(e.name);
			//console.log(NewList);
		});
}
//PARA CONSEGUIR IDS DE LAS ALUMNAS
	const idsStudents = users=>{
	let ListIds= [];
	users.forEach(e =>{
		ListIds.push(e.id);
		//console.log(ListIds);
	});

//PARA CONSEGUIR PROGRESO DE LAS ALUMNAS
	const listProgress = (progreso)=>{
	let newListProgress = [];
	progreso.forEach(e =>{
		newListProgress.push(e.units);
		console.log(newListProgress);
	})
}
//PARA CONSEGUIR CURSOS DE ALUMNAS
	const nameCourse = (courses) =>{
	let coursesArray = [];
	courses.forEach(element => {
		coursesArray.push(element.coursesIndex);
		console.log(coursesArray);
	});
	//console.log(coursesArray);
}
//TRATE DE HACER UNA FUNCION PARA RECORRER USER Y COMPARAR IDS DE USER Y PROGRESS
 	function recorrer(userData , progressData){
 	for (let i = 0; i < ListIds.length; i++) {
 		for (let j = 0; j < progress.length; j++) {
 			if(progress[j] == ListIds[i]){

 			}
 		}
 	}
 	console.log(recorrer);
 }
*/

function recolector(){
	if(users && progress && cohorts){
		computeUsersStats(usersData, progressData, ["id", "start", "coursesIndex", "end", "userCount"]);
	}
}
window.computeUsersStats = (users, progress, courses) =>{
	fetch(usersData)
	.then(response => response.json())
	.then(data => {
		users = data;
		recolector();
		//listStudents(users);
		//idsStudents(users);
})
 	fetch(progressData)
	.then(response => response.json())
	.then(progreso => {
		progress = progreso;
		recolector();
		//console.log(progress);
		//listProgress(progreso);
});

 	fetch(cohortsData)
	.then(response => response.json())
	.then(courses => {
		cohorts = courses;
		recolector();
	//nameCourse(courses);
});

}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}