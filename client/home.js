Template.home.helpers({
  items: function () {
  	// TODO

  	var items = sProps.getOne(Meteor.userId(), "items");
    return items;
  }
});