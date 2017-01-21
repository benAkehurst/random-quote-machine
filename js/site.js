(function(){

	"use strict";
	
	// This array holds colors to be used for the background of the page
	var colors = ["#68e86a","#e05747","#ffc166","#f2ff44","#50d831","#31d5d8","#4638e0","#bf2cd6", "#dd235e", "#c60d0d"];
	
	$(function(){ // Start of jQuery Self Invoked

		// On page load, a random quote is generated
		$(function(){
			$.getJSON(url, getQuote, 'jsonp');
		});

		// This url holds the api call
		var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=937583&format=jsonp&lang=en&jsonp=?";

		// Get quote is a self-invoked function that populates the twitter share button
		var getQuote = function(data) {
		  $(".spanQuoteText").text(data.quoteText);
		  var quote = "https://twitter.com/intent/tweet?text=" + data.quoteText + " - " + data.quoteAuthor;
		  if (data.quoteAuthor === " ") {
		    data.quoteAuthor = 'Unknown';
		  }
		  $(".spanQuoteAuthor").text(data.quoteAuthor);
		  $("#tweetButton").attr("href", quote);
		};

		// When clicking the new quote button, a new quote is called from the API and a random color is called for the background
		$("#buttonNewQuote").click(function(){
			$.getJSON(url, getQuote, 'jsonp');
			var randomColor = getRandomColor(colors);
			$("body").css("background-color",randomColor);
			$("button").css("background-color",randomColor);
		}); // End of button click to make new quote

	
    }); // End of jQuery Self Invoked

	// This function takes the array of random colors and returns a random value for use in page CSS
	function getRandomColor(colors){
		var randomColor = colors[Math.floor(Math.random() * colors.length)];
		return randomColor;
	}

})(); // End of self-invoked site.js