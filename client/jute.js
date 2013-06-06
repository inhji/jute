var jute = this.jute = {};
var log = this.log = TLog.getLogger();

// usage:
//log.fatal("your message","optional module name");
//log.error("your message","optional module name");
//log.warn("your message","optional module name");
//log.info("your message","optional module name");
//log.verbose("your message","optional module name");
//log.debug("your message","optional module name");

// init auth params
jute.consumerKey = "13218-4061983301b5c6575d604dc0";
jute.redirectUrl = "http://localhost:3000";
jute.winParams = "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=500,height=400";
jute.authState = 0; //unauthorized

jute.startAuth = function () {
	var key = Session.get("consumerKey");
	var redirect_uri = Session.get("redirectURI");

	Meteor.call('getPocketAuth', jute.consumerKey, jute.redirectUrl, function (err, requestToken) {
		if (requestToken == false) return false;
		pushAuthState();

		var winAuth = window.open(
			"https://getpocket.com/auth/authorize?request_token=" + requestToken + "&redirect_uri=" + jute.redirectUrl, 
			"Redirecting to Pocket..",
			jute.winParams
		);

		var pollTimer = window.setInterval(function() {
		    if (winAuth.closed !== false) { // !== is required for compatibility with Opera
		        window.clearInterval(pollTimer);
		        pushAuthState();

        		Meteor.call('getpocketAuthComplete', requestToken, jute.consumerKey, function (err, authString) {
        			pushAuthState();

        			Meteor.call("createJuteUser", authString, function (err, juteUser) {
        				if (err) {
        					log.error(err);
        					return;
        				};

        				alert(juteUser.password);
        				Meteor.loginWithPassword(juteUser.username, juteUser.password, function (err) {
        					if (err) {
        						log.error(err);
        						return;
        					};

        					console.log(Meteor.user());
        				});
        			});
        		});
		    }
		}, 100);
	});
};

var pushAuthState = function () {
	//log.info("Auth Step [" + jute.authState + "] complete.", "jute.js")
	jute.authState++;
};

var truncateUrl = function(url){
  start = isHttps(url) ? 8 : 7;
  end = url.indexOf("/", start);
  return url.substring(start, end);
};

var isHttps = function(url){
  return ((url.substr(0,5) === "https") ? true : false);
};
