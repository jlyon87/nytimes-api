var App = (function View(App) {

	var createCard = function(doc) {
		var card = document.createElement("div");
		card.className = "card"

		var cardBlock = document.createElement("div");
		cardBlock.className = "card-block";

		var cardTitle = document.createElement("h1");
		cardTitle.className = "card-title";
		cardTitle.textContent = doc.headline.main;

		var cardText = document.createElement("p");
		cardText.className = "card-text";
		cardText.textContent = doc.snippet;

		var link = document.createElement("a");
		link.textContent = doc.source;
		link.href = doc.web_url;
		link.target = "_blank";

		cardBlock.appendChild(cardTitle);
		cardBlock.appendChild(cardText);
		cardBlock.appendChild(link);

		card.appendChild(cardBlock);
		return card;
	};

	var populateResults = function(docs) {
		var searchResults = document.getElementById("search-results");
		searchResults.innerHTML = "";

		docs.forEach(function(doc, i) {
			searchResults.appendChild(createCard(doc));
		});
	};

	App.view = {
		populateResults: populateResults,
	};

	return App;
}(App || {}));
