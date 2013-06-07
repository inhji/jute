pocketItems = new Meteor.Collection("pocketItems");
metaItems		= new Meteor.Collection("metaItems");
syncProps		= new Meteor.Collection("syncProps");

Meteor.subscribe("pocketItems");
Meteor.subscribe("metaItems");
Meteor.subscribe("syncProps");