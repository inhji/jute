Meteor.Router.add({
<<<<<<< HEAD
	'/': 'home',
	'/p/:page': function (page) {
		Session.set("page", page);
	}
=======
	'*': 'home'
>>>>>>> f1a438b93f139a0577f79a8f33229fc35b1cfe0f
});