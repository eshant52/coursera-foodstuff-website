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

$(function(){
	$(document).ready(function () {
		$('nav > ul > li').click(function () {
	        $('nav > ul > li').removeClass('nav-active');
	        $(this).addClass('nav-active');
	    });
	});
});

$(function(){
	$(document).ready(function () {
		$('div > a').click(function () {
	        $('div > a').removeClass('active');
	        $(this).addClass('active');
	    });
	});
});

$(function(){
	$(document).ready(function () {
		$('div > ul > li').click(function () {
	        $('div > ul > li').removeClass('header-active');
	        $(this).addClass('header-active');
	    });
	});
});

$(function(){
	$(document).ready(function (){
		$('#hide').hide();
		$('#hide-1').hide();
	});
});

(function (global) {
	var dc = {};
	var homeHtml = "html-snippets/home-page.html";
	var healthyFoodHtml = "html-snippets/healthy-page.html";
	var unhealthyFoodHtml = "html-snippets/unhealthy.html";
	var streetFoodHtml = "html-snippets/street-food-page.html";
	var recipeHtml = "html-snippets/recipes.html";
	var foodWasteHtml = "html-snippets/food-waste.html";
	var hungerIssueHtml = "html-snippets/hunger.html";
	var donationHtml = "html-snippets/donation.html";

	// Insert the html function
	var insertHtml = function (selector, html) {
		document.querySelector(selector).innerHTML = html;
	};

	// loader functiion
	var loader = function (selector) {
		var html = '<div id="blank" class="col-12"><div id="spinner" class="d-flex justify-content-center">';
  		html += '<div class="spinner-border text-secondary" style="width: 3rem; height: 3rem;" role="status">';
    	html += '<span class="sr-only">Loading...</span>';
  		html += '</div></div></div>';
  		insertHtml(selector , html);
	};

	//navbar active element function
	var navActive = function(select) {
	    $('nav > ul > li').removeClass('nav-active');
	    $('nav > ul > li:nth-child(' + select +')').addClass('nav-active');
	};

	var headerActive = function(select) {
		$('div > ul > li').removeClass('header-active');
	    $('div > ul > li:nth-child(' + select +')').addClass('header-active');
	};

	document.addEventListener("DOMContentLoaded", function(event) {
		
		$(function () {
			headerActive('1');
			// loader
			loader("#main-content");
			// http request for home html
			$ajaxUtils.sendGetRequest (
				homeHtml,
				function (responseText){
					insertHtml("#main-content",responseText);
				},
				false
			);
		});	

		dc.homeHtml = function () {
			navActive('7');
			headerActive('1');
			// loader
			loader("#main-content");
			// http request for home html
			$ajaxUtils.sendGetRequest (
				homeHtml,
				function (responseText){
					insertHtml("#main-content",responseText);
				},
				false
			);
		};	
			

		// http request for healthy food html
		dc.healthyFoodHtml = function () {
			headerActive('4');
			navActive('1');
			loader("#main-content");
			$ajaxUtils.sendGetRequest (
				healthyFoodHtml,
				function (responseText) {
					insertHtml("#main-content",responseText);
				},
				false
			);
		};

		dc.recipeHtml = function () {
			headerActive('4');
			navActive('2');
			loader("#main-content");
			$ajaxUtils.sendGetRequest (
				recipeHtml,
				function (responseText) {
					insertHtml("#main-content",responseText);
				},
				false
			);
		};

		dc.unhealthyFoodHtml = function () {
			headerActive('4');
			navActive('3');
			loader("#main-content");
			$ajaxUtils.sendGetRequest (
				unhealthyFoodHtml,
				function (responseText) {
					insertHtml("#main-content",responseText);
				},
				false
			);
		};

		dc.foodWasteHtml = function () {
			headerActive('4');
			navActive('4');
			loader("#main-content");
			$ajaxUtils.sendGetRequest (
				foodWasteHtml,
				function (responseText) {
					insertHtml("#main-content",responseText);
				},
				false
			);
		};

		dc.streetFoodHtml = function () {
			headerActive('4');
			navActive('5');
			loader("#main-content");
			$ajaxUtils.sendGetRequest (
				streetFoodHtml,
				function (responseText) {
					insertHtml("#main-content",responseText);
				},
				false
			);
		};

		dc.hungerIssueHtml = function () {
			headerActive('4');
			navActive('6');
			loader("#main-content");
			$ajaxUtils.sendGetRequest (
				hungerIssueHtml,
				function (responseText) {
					insertHtml("#main-content",responseText);
				},
				false
			);
		};

		dc.donationHtml = function () {
			navActive('7');
			headerActive('2');
			loader("#main-content");
			$ajaxUtils.sendGetRequest (
				donationHtml,
				function (responseText) {
					insertHtml("#main-content",responseText);
				},
				false
			);
		};
	});

	global.$dc = dc;

})(window);