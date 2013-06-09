Template.items.helpers({
	'items': function () {
		return pocketItems.find();
	}
});

Template.itemNav.helpers({
	'nextPage': function () {
		var currentPage = parseFloat(Session.get("page"));
		return (currentPage + 1);
	},

	'prevPage': function () {
		var currentPage = parseFloat(Session.get("page"));
		return (currentPage - 1);
	}
});