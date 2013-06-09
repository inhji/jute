Meteor.Router.add({
	'/': 'home',
	'/p/:page': function (page) {
		Session.set("page", page);
	}
});