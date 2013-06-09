//////////////////////////////////////////////////////////////
// User Related Methods
//////////////////////////////////////////////////////////////

Meteor.methods({
	'createJuteUser': function (authString) {
		var pocketUser = getUserData(authString);
		var password = Random.id();

		var juteUser = {
			username: pocketUser.user,
			password: password,
			profile: {
<<<<<<< HEAD
				token: pocketUser.auth,
				since: 0
=======
				token: pocketUser.auth
>>>>>>> f1a438b93f139a0577f79a8f33229fc35b1cfe0f
			}	
		};

		var id = Accounts.createUser(juteUser);
		console.log("New user with ID " + id + " created.");
		return juteUser;
<<<<<<< HEAD
	},

	'setPassword': function (userId) {
		var password = Random.id();
		Accounts.setPassword(userId, password);
		return password;
=======
>>>>>>> f1a438b93f139a0577f79a8f33229fc35b1cfe0f
	}
});

var getUserData = function (authString) {
	var t = authString.split("&");
	var auth = t[0].split("=")[1];
	var user = t[1].split("=")[1];

	return {auth: auth, user: user};
}