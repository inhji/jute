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
				token: pocketUser.auth,
				since: 0
			}	
		};

		var id = Accounts.createUser(juteUser);
		console.log("New user with ID " + id + " created.");
		return juteUser;
	}
});

var getUserData = function (authString) {
	var t = authString.split("&");
	var auth = t[0].split("=")[1];
	var user = t[1].split("=")[1];

	return {auth: auth, user: user};
}