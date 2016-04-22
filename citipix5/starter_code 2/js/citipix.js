

/*
Pseudocode:
1. User inputs city via textbox
2. Onlick event for Update button
3. Update button changes background image of page based on user input of city
4. Utilize if/else conditional statement
5. Function that ties output and input together: 
 "San Francisco" or "SF" or "Bay Area" makes the background of the page sf.jpg                                                                                                                  
 "Los Angeles" or "LA" or "LAX" makes the background of the page la.jpg                                                                                                                         
 "Austin" or "ATX" makes the background of the page austin.jpg                                                                                                                                  
 "Sydney" or "SYD" makes the background of the page sydney.jpg
6. Use preventDefault method to prevent form submission
7. Use document ready handler
*/

//ready handler
$(function(){

	/*Instead of listening for the button click which would prevent the entire
	script from executing, listen for the <form> which keeps
	anything from happening just by pressing the Update button*/
	
	//Prevent default keeps page from reloading to its
	//original state before data is entered.
	$("form").submit(function(e){
			e.preventDefault();
	});
	

});

//click event for the Update button
$(":submit").click(getCity); 

//function to get the image for the city entered and display as the background image
function getCity(){

	//Get the value entered for city
	var city = $.trim($('#city-type').val());


	if (city == "New York" || city =="New York City" || city === "NYC")
	{
		$('body').attr('class','nyc');
		resetCity();
		
	}
	else if (city == "San Francisco" || city === "SF" || city === "Bay Area")
	{
		$('body').attr('class','sf');
		resetCity();
	}
	else if (city == "Los Angeles" || city === "LA" || city === "LAX")
	{
		$('body').attr('class','la');
		resetCity();

	}
	else if (city == "Austin" || city === "ATX")
	{
		$('body').attr('class','austin');
		resetCity();
	}

	else if (city == "Sydney" || city === "SYD")
	{
		$('body').attr('class','sydney');
		resetCity();
	}

	//console.log(city);
}
	
//After the background image updates after the city is entered,
//the input field for city will reset
function resetCity(){
	$('#city-type').val("");

}
