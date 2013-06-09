Template.search.events({
	'keyup #search': function (e) {
		Session.set("query", e.srcElement.value);
	}
});

Deps.autorun(function () {
	var query = Session.get("query");

	if (query === undefined) query = "";

	console.log(query);

	if (query.length >= 3) {
		console.log("more than or equal 3 chars");
	}
});

