Template.home.helpers({
  items: function () {
  	var res = Session.get("queryResult");
    return res;
  }
});