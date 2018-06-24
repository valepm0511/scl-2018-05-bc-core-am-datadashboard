window.computeUsersStats = (users, progress, courses) => {
	//console.log(users);
	// console.log(progress);
	// console.log(courses);
	//recorre usuarios
	for(let i = 0; i < users.length; i++){ 
		containerUsersOk.innerHTML += '<p>Nombre: ' + users[i].name + '</p>';
		// const userProgress = progress[users[i].id]; //obtiene el progreso de cada alumna
		// //console.log(userProgress);
  //   let coursesProgress = Object.keys(userProgress).map((key) => { 
  //   	//console.log(userProgress[key]);
  //   	return userProgress[key];
   // });

   
 //   let ramos = [];
	// 	coursesProgress.forEach((courses) => { //itera progreso de cada curso
 //    const ramosParts = Object.keys(courses.units).map((key) => {
 //    	return Object.keys(courses.units[key].ramos).map((keyRamos) => {
 //    		return courses.units[key].ramos[keyRamos]
 //    	});
 //    });
 //   
 //   // console.log(ramos);
 // });
}
}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}