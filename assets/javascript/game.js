// Gem Objects which create a random number on page load and sets it two the variable gem# which will be accessed .onButtonUp later

	var gemOne = {
		valOne: 0,
		getRandomInt: function () {
	   		valOne = Math.floor(Math.random() * 10) +7;
		}
	};

	var gemTwo = {
		valTwo: 0,
		getRandomInt: function () {
	   		valTwo = Math.floor(Math.random() * 10) +5;
		}
	};

	var gemThree = {
		valThree: 0,
		getRandomInt: function () {
	   		valThree = Math.floor(Math.random() * 10) +3;
		}
	};

	var gemFour = {
		valFour: 0,
		getRandomInt: function () {
	   		valFour = Math.floor(Math.random() * 10) +1;
		}
	};

	var target = 0;
	var userScore = 0;
	var wins = 0;
	var losses = 0;

// A function that creates a random target number

	$(document).ready(function() {
		var target = Math.floor(Math.random()*100) + 20;
		gemOne.getRandomInt();
		gemTwo.getRandomInt();
		gemThree.getRandomInt();
		gemFour.getRandomInt();

		console.log("Target Score: " + target);
		console.log("Gem One :" + valOne);
		console.log("Gem Two :" + valTwo);
		console.log("Gem Three :" + valThree);
		console.log("Gem Four :" + valFour);
	});


// The on("click") functions that trigger on button presses, adding the values to user's total

	$("#butOne").on("click", function() {
		userScore = userScore + valOne;
		$("#scoreCounter").html(valOne);
		$("#totalScore").html(userScore);
	});

	$("#butTwo").on("click", function() {
		userScore = userScore + valTwo;
		$("#scoreCounter").html(valTwo);
		$("#totalScore").html(userScore);
	});

	$("#butThree").on("click", function() {
		userScore = userScore + valThree;
		$("#scoreCounter").html(valThree);
		$("#totalScore").html(userScore);
	});

	$("#butFour").on("click", function() {
		userScore = userScore + valFour;
		$("#scoreCounter").html(valFour);
		$("#totalScore").html(userScore);
	});

// If/If Else statements that check to see if 

	if (userScore === target) {

		wins++;
		$("#playerWin").html(wins);
		alert("You collected the right number! Play again!");

		$("#scoreCounter, #totalScore").empty();

		var target = Math.floor(Math.random()*100) + 20;
		gemOne.getRandomInt();
		gemTwo.getRandomInt();
		gemThree.getRandomInt();
		gemFour.getRandomInt();

	} else {

		losses++;
		$("#playerLoss").html(losses);
		alert("You went over  :(  Play again!");

		$("#scoreCounter, #totalScore").empty();

		var target = Math.floor(Math.random()*100) + 20;
		gemOne.getRandomInt();
		gemTwo.getRandomInt();
		gemThree.getRandomInt();
		gemFour.getRandomInt();
	}