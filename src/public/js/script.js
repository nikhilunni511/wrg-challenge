function submitForm(e) {

	e.preventDefault();

	const formUser = document.forms.userForm;
	const formData = new FormData(formUser);
	formUser.checkValidity()

	const userData = {
		firstName: formData.get('firstName'),
		lastName: formData.get('lastName'),
		email: formData.get('email'),
		phone: formData.get('phone'),
		experience: formData.get('experience'),
		achievements: formData.get('achievements')
	};

	const http = new XMLHttpRequest();
	const url = '/api/users';
	http.open('POST', url, true);

	//Send the proper header information along with the request
	http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

	http.onreadystatechange = function () {
		if (http.readyState == 4) {
			const res = JSON.parse(http.response);
			if (http.status == 200) {
				alert(res.message);
				formUser.reset();
			}
			else {
				if (res && res.status === 'failure' && res.message) {
					alert(res.message)
				}
				else {
					alert("Something went wrong, please try again later!");
				}
			}
		}
	}

	http.send(JSON.stringify(userData));
}