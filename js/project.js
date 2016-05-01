
//Keeps year in footer up to date automatically
var today = new Date();
var year = today.getFullYear();	

var el = document.getElementById('footer-copyright');
el.innerHTML = '<p>&copy;' + year + ' Katrina Prather</p>';




//Navigation ease to section on page
function goToByScroll(id){
	$('html, body').animate({scrollTop: $("#"+id).offset().top},2000);
	id.preventDefault();
}

//Double chevron that will scroll to top of page after clicked
function backToTop(){
		$('.scrollup').fadeToggle();
		$('html, body').animate({
			scrollTop: 0},600);
		return false;
}

//Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-77179345-1', 'auto');
  ga('send', 'pageview');



$(function(){

	//Variable holds the position of the bottom of the home page
	//to determine when to apply nav changes 
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

	});


	// Clicking the arrow at the bottom of the hero page will take you
	//to the top of my tagline 
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


});