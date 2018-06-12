// import vendor/modernizr.js
// import vendor/jquery.js

$(document).ready(function(){

	$(".nav-main li:has(ul)").addClass("has-sub-nav").prepend("<div class=\"sub-toggle\"></div>");

	$(".has-sub-nav a").click(function(){
		$(this).parent().addClass("active");
		$(".nav-container").addClass("show-sub");
	});

	$(".has-sub-nav .back").click(function(){
		$(".nav-container").removeClass("show-sub");
		$(".has-sub-nav").removeClass("active");
	});

});
