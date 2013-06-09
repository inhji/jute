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
	},

	'click #changePass': function () {
		setPass();
	}
});

var setPass = function () {
	Meteor.call('setPassword', Meteor.userId(), function (err, res) {
		console.log(err,res);
	});
}

