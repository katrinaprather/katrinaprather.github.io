

$("form").submit(function(e){
	e.preventDefault();
});

/*Function converts input of temperature in fahrenheit to the equivalent
temperature in degrees celsius*/
function convertFtoC(){
	
	//accepts a value to represent temperature in degrees fahrenheit
	var fahrenheitTemperature = $("#fahrenheit").val();

	//Calculatation to store converted degrees fahrenheit to degrees in celsius
	var celsiusTemperature = (fahrenheitTemperature - 32) / 1.8;
//console.log (celsiusTemperature);



if (celsiusTemperature >=30){
		
		//display pic for hot weather
		$('body').attr('class','hot');
		$('#celsius').html(celsiusTemperature);
	}
	else if (celsiusTemperature >=22 && celsiusTemperature <= 29  ){
		//display pic for warm weather
		$('body').attr('class','warm');
		$('#celsius').html(celsiusTemperature);

	}
	else if (celsiusTemperature > 0 && celsiusTemperature <= 21  ){
		//display pic for cold weather
		$('body').attr('class','cold');
		$('#celsius').html(celsiusTemperature);

	}
	else if (celsiusTemperature <= 0){
		//display pic for freezing weather
		$('body').attr('class','freezing');
		$('#celsius').html(celsiusTemperature);
	}


}

function resetApp(){
	$('#fahrenheit').val("");
	$('#celsius').html("");
	$('body').removeClass('hot');
	$('body').removeClass('warm');
	$('body').removeClass('cold')
	$('body').removeClass('freezing');

}

$(function(){

	$("[type='submit']").click(convertFtoC);
	//resetApp();
	$("[type='reset']").click(resetApp);


});

