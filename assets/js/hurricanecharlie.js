$(document).ready(function () {

	window.addEventListener("scroll", function() {
	    if (window.scrollY > 200) {
	        $('.navbar').slideUp();
	    }
	    else {
	        $('.navbar').slideDown();
	    }
	},false);

});
