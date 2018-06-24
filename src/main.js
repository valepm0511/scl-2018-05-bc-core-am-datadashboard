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


fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
.then(response => response.json())
.then(data => {
	users = data;
	fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
	.then(response => response.json())
	.then(progressJSON => {
		progress = progressJSON;
		fetch('../data/cohorts.json')
		.then(response => response.json())
		.then(cohortJSON => {
			cohort = cohortJSON;
			window.computeUsersStats(users, progress, cohort);
		});
	});
});




