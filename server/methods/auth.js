//////////////////////////////////////////////////////////////
// Authentication Related Methods
//////////////////////////////////////////////////////////////

Meteor.methods({
	getPocketAuth: function (consumerKey, redirectUrl) {
	  this.unblock();
	  var result = Meteor.http.post("https://getpocket.com/v3/oauth/request",
		  {data: {
		  	consumer_key: consumerKey,
		  	redirect_uri: redirectUrl
		  }}
		);
		
		if (result.statusCode === 200) {
			// Return request token
			console.log("Oauth request complete.\nRequest token: " + result.content.substring(5), "methods/auth.js");
			return result.content.substring(5);
		}else{
			return false;
		}
	},

	getpocketAuthComplete: function (requestToken, consumerKey) {
		this.unblock();
		var result = Meteor.http.post("https://getpocket.com/v3/oauth/authorize",
			{data:{
				consumer_key: consumerKey,
				code: requestToken
			}}
		);

		if (result.statusCode === 200) {
			console.log("Oauth auth complete.\nAccess token: " + result.content, "methods/auth.js")
			return result.content;
		}else{
			return false;
		}
	}
});