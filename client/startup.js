Meteor.startup(function () {
	Session.setDefault("queryResult", []);
	Session.setDefault("query", "");
	Session.setDefault("page", 1);
});