

//--Pseudocode:
//var to hold playerA selection
//var to hold playerB selection
//var to hold sum of player inputs
//formula to determine if sum of player inputs is even or odd
//display name of winner
//clear radio buttons to restart game



/*function Game(){

	var playerAInput = $('input[name="playerA"]:checked').val();
	var playerBInput = $('input[name="playerB"]:checked').val();
	alert(playerAInput);
}*/

//Anonymous function
$(function(){

	$('form').on('change',function(){

		//Variables to hold the value selected by each player (A or B)
		var playerAInput = parseInt($('input[name=playerA]:checked').val());
		var playerBInput = parseInt($('input[name=playerB]:checked').val());


		//Outer conditional used to guard against execution of code when 
		//only one player has made a selection
		if (isNaN(playerAInput) == false && isNaN(playerBInput) == false)
		{
			//Provides the sum of both player's selection
			sumOfInputs = playerBInput + playerAInput;
			

			//Conditional to determine if the sumOfInputs is even or odd
			if(sumOfInputs % 2 == 0){
				//console.log(sumOfInputs);
				$("#winner").html("Evens");
			}
			else{
				$("#winner").html("Odds");
			}
		}
	});
});//end anonymous function

//document ready function-holds all click events until page elements are ready
$(function(){

});