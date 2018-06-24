window.computeUsersStats = (users, progress, courses) => {
	//recorre usuarios
	for(let i = 0; i < users.length; i++){ 
		//obtiene progress para cada usuario
		const userProgress = progress[users[i].id]; 
	//console.log(userProgress);
    //obtiene el progreso de cada alumna
    let coursesProgress = Object.keys(userProgress).map((key) => { 
    	console.log(userProgress[key]);
    	return userProgress[key];
    });
  }
}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}