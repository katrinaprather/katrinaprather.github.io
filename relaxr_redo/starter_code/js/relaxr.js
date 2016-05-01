
/*Checks to see if the document has 
loaded before executing script*/


	/* Stops the default action of 
	an element from happening*/
	$("a").click(function(){
		event.preventDefault();
	});
	
	/*Functions that make specific elements
	perform specific jQuery effects*/
	function readMore(){
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		$(this).hide();

	}
	function readLess(){
		$("#show-this-on-click").slideUp();
		$(this).hide();
		$(".read_more").show();
		
	}
	function learnMore(){
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();

	}


$(function(){

	/*Events: When clicking elements with these classes,
	it calls the specific function to envoke its actions*/
	$(".read_more").click(readMore);
	$(".readless").click(readLess);
	$(".learnmore").click(learnMore);


});