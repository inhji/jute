Meteor.methods({
	'killdb': function () {
		pocketItems.remove({});
	}
});