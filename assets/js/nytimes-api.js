var App = (function nyTimesApi(App) {

	var config = {
		url: "http://api.nytimes.com/svc/search/v2/articlesearch.json",
		key: "94e2af29c73445f486d85e536b185f57",
	};
	var params = {};

	var setParams = function(obj) {
		params = obj;
	};

	var handleResponse = function() {
		if(this.response.status === "OK") {
			App.articleApi.data = this.response;
			App.view.populateResults(this.response.response.docs);
		} else {
			console.log("NOT OK", this.response);
		}
	};

	var query = function() {
		var queryURL = config.url + "?api-key=" + config.key;

		for(var prop in params) {
			if(params.hasOwnProperty(prop)) {
				queryURL += "&" + prop + "=" + params[prop];
			}
		}

		var request = new XMLHttpRequest();
		request.responseType = "json";
		request.open("GET", queryURL);
		request.addEventListener("load", handleResponse);
		request.send();
	};

	App.articleApi = {
		query: query,
		setParams: setParams
	};

	return App;
} (App || {}));
