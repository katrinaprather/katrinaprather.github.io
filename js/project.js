	
//works - navigation ease to section on page
	function goToByScroll(id){
		$('html, body').animate({scrollTop: $("#"+id).offset().top},2000);
		id.preventDefault();

	}


function backToTop(){
		$('.scrollup').fadeToggle();
		$('html, body').animate({
			scrollTop: 0},600);
		return false;
		

}


$(function(){


	//Variable holds the position of the bottom of the home page
	//to determine when to apply nav changes -was working
	var heroBottom = $("#hero").offset().top + $("#hero").height();
	

	$(window).on('scroll', function() {
		stop = Math.round($(window).scrollTop());
		if (stop > heroBottom){
			$('header .wrapper').addClass('change-nav');
			//add to show() for double chevron 
			$('.scrollup').show();
			/*alert(heroBottom + stop);*/
		}
		else{
			$('header .wrapper').removeClass('change-nav');
			$('.scrollup').hide();
		}


	});//works 


	
	// Clicking the arrow at the bottom of the hero page will take you
	//to the top of my tagline -was working
	$('.icon').click(function(){

		$('html, body').animate({
			scrollTop: $('#tagline').offset().top}, 1000);
			$('#active-about').addClass('active');

	});


	$('.scrollup').click(backToTop);

	//hamburger menu
	$('header nav ul li:first-child').click(function(){
    	$(this).parent().toggleClass('slideDown');
  	});

/*for double arrows to navigate to top of page -need this to work
	$(window).scroll(function(){
		if ($(this).scrollTop()>100){
			$('.scrollup').fadeIn();
		}
		else{
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){

		$('html, body').animate({
			scrollTop: 0},600);
		return false;
		});


	});
*/
/*
	$('#active-about').click(function(){

		$('html, body').animate({
			scrollTop: $('#tagline').offset().top}, 1000);
			

	});

*/
});