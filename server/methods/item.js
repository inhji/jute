//////////////////////////////////////////////////////////////
// Item Related Methods
//////////////////////////////////////////////////////////////

Meteor.methods({
	getPocketItems: function (consumerKey, pocketAccessToken, since, sort) {
		this.unblock();

		var result = Meteor.http.post("https://getpocket.com/v3/get",
			{data: {
				consumer_key: consumerKey,
				access_token: pocketAccessToken,
				sort: sort,
				since: since,
				detailType: "complete"
			}}
		);

		if (result.statusCode === 200) {
<<<<<<< HEAD
=======
			log.info("Pocket items successfully fetched. " + result.content.list.length() + " items fetched.", "methods/item.js")
>>>>>>> f1a438b93f139a0577f79a8f33229fc35b1cfe0f
			return (result);
		}else{
			return false;
		}
	}
});