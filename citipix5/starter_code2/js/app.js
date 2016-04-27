
//Pseudocode:
//Create an array that contains the cities
//Loop to iterate through array
//Create a select menu to host the cities for user interaction
//Create a change event which acknowledges a user selection
//Conditional to determine which background image to apply based on user input



var arrayOfCities = ["NYC", "SF", "LA", "ATX", "SYD"];
var selectedCity

$(function(){


	//Loop iterates through array that holds all of the cities
	for (i = 0; i < arrayOfCities.length; i++){
		
		//Adding each city in the array to the dropdown menu
		//Gives the value name the same as the city name instead of numbers
		$('#city-type').append('<option value='+arrayOfCities[i]+'>' +arrayOfCities[i]+ '</option>');
		
	}

	//Change event occurs when user clicks the form and makes a selection from the dropdown
	$('form').change(function(){

		//Variable to hold city that is selected by the user
		selectedCity = $('#city-type').val();
		
		
		//Conditional that changes the background of the body based on the city the user selects
		if (selectedCity === "NYC")
		{
			$('body').attr('class','nyc');
			
			
		}
		else if (selectedCity === "SF")
		{
			$('body').attr('class','sf');
			
		}
		else if (selectedCity === "LA")
		{
			$('body').attr('class','la');
			

		}
		else if (selectedCity === "ATX")
		{
			$('body').attr('class','austin');
			
		}

		else if (selectedCity === "SYD")
		{
			$('body').attr('class','sydney');
			
		}
		
	});

});