pocketItems = new Meteor.Collection("pocketItems");
<<<<<<< HEAD
syncProps		= new Meteor.Collection("syncProps");

Deps.autorun(function () {
	var page = Session.get("page");

	Meteor.subscribe("pocketItems", page);
});

=======
metaItems		= new Meteor.Collection("metaItems");
syncProps		= new Meteor.Collection("syncProps");

Meteor.subscribe("pocketItems");
Meteor.subscribe("metaItems");
>>>>>>> f1a438b93f139a0577f79a8f33229fc35b1cfe0f
Meteor.subscribe("syncProps");