// Gem Objects which create a random number on page load and sets it two the variable gem# which will be accessed .onButtonUp later

	var gemOne = {
		valOne: 0,
		getRandomInt: function () {
	   		this.valOne = Math.floor(Math.random() * 10) +7;
		}
	}

	var gemTwo = {
		valTwo: 0,
		getRandomInt: function () {
	   		this.valTwo = Math.floor(Math.random() * 10) +5;
		}
	}

	var gemThree = {
		valThree: 0,
		getRandomInt: function () {
	   		this.valThree = Math.floor(Math.random() * 10) +3;
		}
	}

	var gemFour = {
		valFour: 0,
		getRandomInt: function () {
	   		this.valFour = Math.floor(Math.random() * 10) +1;
		}
	}

	var target = 0;
	var userScore = 0;
	var wins = 0;
	var losses = 0;

// A function that creates a random target number

	$(document).ready(function() {
		target = Math.floor(Math.random()*100) + 20;
		gemOne.getRandomInt();
		gemTwo.getRandomInt();
		gemThree.getRandomInt();
		gemFour.getRandomInt();

		console.log("Target Score: " + target);
		console.log("Gem One :" + gemOne.valOne);
		console.log("Gem Two :" + gemTwo.valTwo);
		console.log("Gem Three :" + gemThree.valThree);
		console.log("Gem Four :" + gemFour.valFour);

	// The on("click") functions that trigger on button presses, adding the values to user's total

		$("#butOne").on("click", function() {
			userScore = userScore + gemOne.valOne;
			$("#scoreCounter").html(gemOne.valOne);
			$("#totalScore").html(userScore);
			checkValues();
		});

		$("#butTwo").on("click", function() {
			userScore = userScore + gemTwo.valTwo;
			$("#scoreCounter").html(gemTwo.valTwo);
			$("#totalScore").html(userScore);
			checkValues();
		});

		$("#butThree").on("click", function() {
			userScore = userScore + gemThree.valThree;
			$("#scoreCounter").html(gemThree.valThree);
			$("#totalScore").html(userScore);
			checkValues();
		});

		$("#butFour").on("click", function() {
			userScore = userScore + gemFour.valFour;
			$("#scoreCounter").html(gemFour.valFour);
			$("#totalScore").html(userScore);
			checkValues();
		});
	});

// If/If Else statements that check to see if 

	function checkValues() {
		if (userScore === target) {

			wins++;
			$("#playerWin").html(wins);
			alert("You collected the right number! Play again!");

			$("#scoreCounter, #totalScore").html("0");
			userScore = 0;

			target = Math.floor(Math.random()*100) + 20;
			gemOne.getRandomInt();
			gemTwo.getRandomInt();
			gemThree.getRandomInt();
			gemFour.getRandomInt();

			console.log("Target Score: " + target);
			console.log("Gem One :" + gemOne.valOne);
			console.log("Gem Two :" + gemTwo.valTwo);
			console.log("Gem Three :" + gemThree.valThree);
			console.log("Gem Four :" + gemFour.valFour);

		} else if (userScore > target) {

			losses++;
			$("#playerLoss").html(losses);
			alert("You went over  :(  Play again!");

			$("#scoreCounter, #totalScore").html("0");
			userScore = 0;

			target = Math.floor(Math.random()*100) + 20;
			gemOne.getRandomInt();
			gemTwo.getRandomInt();
			gemThree.getRandomInt();
			gemFour.getRandomInt();

			console.log("Target Score: " + target);
			console.log("Gem One :" + gemOne.valOne); 
			console.log("Gem Two :" + gemTwo.valTwo);
			console.log("Gem Three :" + gemThree.valThree);
			console.log("Gem Four :" + gemFour.valFour);

		}
	}