pocketItems = new Meteor.Collection("pocketItems");
<<<<<<< HEAD
syncProps		= new Meteor.Collection("syncProps");

Meteor.publish("pocketItems", function (page) {
	page = (page <= 0) ? 1 : page;

	var limit = 10;
	var skip = page * limit;
	var id = this.userId;

	return pocketItems.find({}, {
		limit: limit,
		skip: skip,
		sort: {'item.sort_id': 1}
	});
});

Meteor.publish("syncProps", function () {
	return syncProps.find();
=======
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
>>>>>>> f1a438b93f139a0577f79a8f33229fc35b1cfe0f
});
