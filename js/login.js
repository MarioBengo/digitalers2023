const users = JSON.parse(localStorage.getItem("users"));

const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const emailInput = event.target.elements.email.value;
	const passwordInput = event.target.elements.password.value;

	const userExist = users.find((usr) => {
		if (usr.email === emailInput) {
			return true;
		}

		return false;
	});

	if (!userExist || userExist.password !== passwordInput) {
		Swal.fire(
			"Login incorrecto",
			"Los datos ingresados son incorrectos",
			"error"
		);
		return;
	}

	Swal.fire("Login Correcto", "En breve será redireccionado", "success");

	delete userExist.password;

	localStorage.setItem("currentUser", JSON.stringify(userExist));

	setTimeout(function () {
		window.location.href = "/index.html";
	}, 2000);
});

function logout() {
	localStorage.removeItem("currentUser");
	setTimeout(function () {
		window.location.href = "/index.html";
	}, 1500);
}

