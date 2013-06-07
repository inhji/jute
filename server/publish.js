pocketItems = new Meteor.Collection("pocketItems");
metaItems		= new Meteor.Collection("metaItems");
syncProps		= new Meteor.Collection("syncProps");

Meteor.publish("pocketItems", function () {
	return pocketItems.find({});
});

Meteor.publish("metaItems", function () {
	return metaItems.find({});
});

Meteor.publish("syncProps", function () {
	return syncProps.find({});
});
