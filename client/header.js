Template.header.user = function () {
	return getUser();
}

Template.header.events = ({
	'click #logout': function () {
		console.log("logout");
		Meteor.logout();
	},

	'click #connect': function () {
		console.log("connect");
		jute.startAuth();
	}
});