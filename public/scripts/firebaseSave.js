var database = firebase.database();

function writeUserData(userId, name, email) {
	database.ref('users/' + userId).set({
	username: name,
	email: email,
	});
}

function submitForm() {
	//alert("submitting!");
	let user = document.getElementById("user").value;
	if (!user) {
		alert("Please fill out a user before submitting");
		return false;
		}
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	writeUserData(user,name,email);
	//return false;
};