$(function (){
	//Event handlesr for navbar when looses its focus.
	//Hide the content
	$("#navbar-toggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 992){
			$("#navbarSupportedContent").collapse('hide');
		}
	});
});

(function (global) {
	var dc = {};
	var homeHtml = "html-snippets/home-page.html";

	// Insert html function
	var insertHtml = function (selector, html) {
		document.querySelector(selector).innerHTML = html;
	};

	// loader
	var loader = function (selector) {
		var html = '<div id="blank" class="col-12"><div class="d-flex justify-content-center">';
  		html += '<div class="spinner-border" role="status">';
    	html += '<span class="sr-only">Loading...</span>';
  		html += '</div></div></div>';
  		insertHtml(selector , html);
	};

	document.addEventListener("DOMContentLoaded", function(event) {

		loader("#main-content");
		//http request for home html
		$ajaxUtils.sendGetRequest (
			homeHtml,
			function (responseText){
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
	});

	global.$dc = dc;

})(window);