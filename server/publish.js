pocketItems = new Meteor.Collection("pocketItems");
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
	return syncProps.find({});
});
