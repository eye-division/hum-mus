jQuery(function( $ ){

	//$(".genesis-nav-menu").addClass("responsive-menu").before('<div id="responsive-menu-icon"></div>');
	//
  $(".genesis-nav-menu").before('<div id="responsive-menu-icon"></div>');

	$("#responsive-menu-icon").click(function(){
		$(".menu-primary").slideToggle();
	});

	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$(".menu-primary").removeAttr("style");
		}
	});

});