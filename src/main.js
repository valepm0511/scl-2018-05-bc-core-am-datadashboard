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








