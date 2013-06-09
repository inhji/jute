if (Meteor.isServer) {
  Meteor.startup(function () {
  	console.log("server starting up.");

    //Meteor.users.remove({});
  });
}