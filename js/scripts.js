/*1. Add Function*/
var add = function(number1, number2) {
	return number1 + number2; 
};

/*2. Subtract Function*/
var subtract = function(number1, number2) {
	return number1 - number2;
};

/*3. Multiply Function*/
var multiply = function() {
	return number1 * number2;
};

/*4. Divide Function*/
var divide = function() {
	return number1 / number2;
}

// alert(add(10,5));
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var result = add(number1, number2);
alert("Add function returns = " + result);

result = subtract(number1, number2);
alert("Subtract function returns = " + result);

result = multiply(number1, number2);
alert("Multiply function returns = " + result);

result = divide(number1, number2);
alert("Divide function returns = " + result);