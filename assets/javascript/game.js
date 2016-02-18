

	var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var computerGuess = "";
	var userGuess = "";
	var pastGuesses = [];
	var guessesLeft = 9;
	var wins = 0;
	var losses = 0;

	window.onload = function(event) {
		onRoundStart();	
	};

	var onRoundStart = function(){
		alert("Computer Chose a Random Letter!");
		computerGuess = computerChoices[Math.floor((Math.random() * 26) + 1)];
		document.querySelector('#guesses').innerHTML = 'Your Guesses So Far:';
		document.querySelector('#guessesLeft').innerHTML = 'Guesses Left: 9' + " ";
		guessesLeft = 9;
		pastGuesses = [];
	};

	document.onkeyup = function(event) {
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		pastGuesses.push(userGuess);
		document.querySelector('#guesses').innerHTML = 'Your Guesses So Far:' + " " + pastGuesses;
		compare(userGuess,computerGuess);
	};

	var compare = function(uGuess,cGuess) {
		if (uGuess === cGuess){
			alert("Nice Job! You Won!");
			wins = wins + 1
			document.querySelector('#wins').innerHTML = "Wins:" + " " + wins;
			onRoundStart();		
			}
		else{
			guessesLeft = guessesLeft - 1;
			document.querySelector('#guessesLeft').innerHTML = 'Guesses Left:' + " " + guessesLeft;
			}
		if (guessesLeft == 0) {
			losses = losses + 1
			document.querySelector('#losses').innerHTML = "Losses:" + " " + losses;
			alert("Sorry, You Lost :( ")
			onRoundStart();
			}
	};

