var App = (function App(App) {

	var init = function() {
		App.articleApi.query();
	};

	init();

	var search = function() {
		var searchText = document.getElementById("search-text");
		var params = {};

		if(searchText.value.length > 2) {
			params.q = searchText.value;
			params.hl = true;
			App.articleApi.setParams(params);
			App.articleApi.query();
		}
	};

	App.controller = {
		search: search,
	};

	return App;
}(App || {}));
