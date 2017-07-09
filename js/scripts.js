/* 1. Business Logic.
			Does not handle user interactivity.
			Defines functions to be called by UI Logic.
*/
var add = function(number1, number2) {
	return number1 + number2; 
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
}

/* 2. User Interface Logic. 
			Handles interactivity with user.
			Calls functions defined in Business Logic */
$(document).ready(function() {
	$('form#add').submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($('#add1').val());
		var number2 = parseInt($('#add2').val());
		// alert(add(number1, number2));
		var result = add(number1, number2);
		$('#output').text("Result = " + result); 
	});
});

