
var users = null;
var progress = null;
var cohorts = null;

const usersData= '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressData = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsData= '../data/cohorts.json';
//para conseguir el nombre de las alumnas
fetch(usersData)
.then(response => response.json())
.then(data => {
	users = data;
	listStudents(users);
	idsStudents(users);
})
const listStudents = users=>{
	let NewList = [];
	users.forEach(e =>{
		NewList.push(e.name);
			//console.log(NewList);
		});
}
const idsStudents = users=>{
	let ListIds= [];
	users.forEach(e =>{
		ListIds.push(e.id);
		//console.log(ListIds);
	});
}

 fetch(progressData)
.then(response => response.json())
.then(progreso => {
	progress = progreso;
	recolector();
	//console.log(progress);
	//listProgress(progreso);
});

/*const listProgress = (progreso)=>{
	let newListProgress = [];
	progreso.forEach(e =>{
		newListProgress.push(e.units);
		console.log(newListProgress);
	})
}*/


 fetch(cohortsData)
.then(response => response.json())
.then(courses => {
	cohorts = courses;
	recolector();
	nameCourse(courses);
});

const nameCourse = (courses) =>{
	let coursesArray = [];
	courses.forEach(element => {
		coursesArray.push(element.coursesIndex);
//		console.log(coursesArray);
	});


	//console.log(coursesArray);
}
 /*function recorrer(userData , progressData){
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
	return recolector;
}
console.log(recolector);

//Recorriendo objetos de progress


window.computeUsersStats = (users, progress, courses) =>{

}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}