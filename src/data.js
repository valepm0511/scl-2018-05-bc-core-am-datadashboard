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
	
}

window.sortUsers = (users, orderBy, orderDirection) =>{

}
window.filterUsers = (users, search) =>{

}
window.processCohortData = (options) =>{
	
}