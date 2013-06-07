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