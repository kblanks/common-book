var database = firebase.database();

const usersRef = database.ref('users');
usersRef.on('value', (snapshot) => {
	const data=snapshot.val();
	//console.log(data);
	let outputDiv = document.getElementById("output-stuff")
	outputDiv.innerHTML = "";
	Object.keys(data).forEach(key => {
		var li = document.createElement('li');
		var uid = key;
		//console.log(uid);
		li.textContent = uid;
		outputDiv.appendChild(li);
	});
});