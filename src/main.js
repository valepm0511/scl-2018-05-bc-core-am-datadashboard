window.onload = () => {
	//LOGIN
	const btnLoginOk = document.getElementById('btnLogin');
	btnLoginOk.addEventListener('click', () => {
		const loginUserOk = document.getElementById('user-login').value;
		const passwordLoginOk = document.getElementById('password-login').value;
		if (passwordLoginOk == '123456') {
			document.getElementById('login').classList.add('divDisplayNone');
			document.getElementById('containerSearch').classList.remove('divDisplayNone');
			document.getElementById('containerSearch').classList.add('divDisplayBlock');
			document.getElementById('welcomeUser').innerHTML = 'Bienvenid@ ' + loginUserOk;
		}else{
			alert("Usuario y/o contraña incorrecta");
		}
	});
}
//guardando ruta de archivos user, progress y cohorts
const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJson = '../data/cohorts.json';
	//conexion archivo user.jason
	let usersData = fetch(usersJson)
	.then(response => response.json())
	.then(users => {
		const usersArray = [];
		usersData = users;
		users.forEach(element => {
			usersArray.push(element.name);
		});
		//conexion archivo progress.jason
		let progressData = fetch(progressJson)
		.then(response => response.json())
		.then(progressJson => {
			const progress = Object.entries(progressJson);
			progressData = progress;
			//conexion archivo cohorts.jason
			let cohortsData = fetch(cohortsJson)
			.then(response => response.json())
			.then(courses => {
				let coursesArray = [];
				courses.forEach(element => {
					coursesArray.push(element.coursesIndex);
				});

				window.computeUsersStats(usersArray,progressData,coursesArray);
			});
		});

	});
	//window.computeUsersStats(nameUsers(), "a", "a");









