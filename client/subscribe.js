pocketItems = new Meteor.Collection("pocketItems");
syncProps		= new Meteor.Collection("syncProps");

Deps.autorun(function () {
	var page = Session.get("page");

	Meteor.subscribe("pocketItems", page);
});

Meteor.subscribe("syncProps");