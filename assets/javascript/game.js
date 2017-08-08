// Gem Objects which create a random number on page load and sets it two the variable gem# which will be accessed .onButtonUp later
	var gemOne = {
		valOne: 0,
		function getRandomInt (min, max) {
	   		valOne = Math.floor(Math.random() * (max - min + 1)) + min;
		}
	};

	var gemTwo = {
		valTwo: 0,
		function getRandomInt (min, max) {
	   		valOne = Math.floor(Math.random() * (max - min + 1)) + min;
		}
	};

	var gemThree = {
		valThree: 0,
		function getRandomInt (min, max) {
	   		valOne = Math.floor(Math.random() * (max - min + 1)) + min;
		}
	};

	var gemFour = {
		valFour: 0,
		function getRandomInt (min, max) {
	   		valOne = Math.floor(Math.random() * (max - min + 1)) + min;
		}
	};

	var userScore = 0;

// A function that creates a random target number
	$(document).ready(function targetScore() {
		var target = Math.floor(Math.random()*100) + 1;
		// $(".totalScore").html("<div>target</div>");
		console.log(target);
	});
	window.onload = targetScore;


// The on("click") functions that trigger on button presses, adding the values to user's total
	$("imgGem").on("click", function() {

		var varName = event;
		$("#firstGem").append(firstInput);

	});


// If/If Else statements that check to see if 

// $(".clear").on("click", function() {
// 	$("#currentNumber").empty();
// })