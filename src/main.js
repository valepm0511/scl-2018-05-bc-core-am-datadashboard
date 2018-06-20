
window.onload = () => {
	const btnLoginOk = document.getElementById('btnLogin');
	btnLoginOk.addEventListener('click', () => {
		const loginUserOk = document.getElementById('user-login').value;
		const passwordLoginOk = document.getElementById('password-login').value;
		if (loginUserOk == 'Valentina Smith' && passwordLoginOk == '123456') {
			document.getElementById('login').classList.add('divDisplayNone');
			document.getElementById('containerSearch').classList.remove('divDisplayNone');
			document.getElementById('containerSearch').classList.add('divDisplayBlock');
		}else{
			alert("Usuario y/o contraña incorrecta");
		}
	});
}
/*document.getElementById('btnAlumnasId').addEventListener('click', ()=>{
	 fetch("https://laboratoria-la-staging.firebaseapp.com/cohorts/:id")
    .then(function(res){
    	let alumnasId= res.json();
console.log(res);
}) 
    .thn()
   
})*/

