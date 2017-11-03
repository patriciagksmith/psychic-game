var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


//Computer chooses a letter

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Player gets 9 guesses

var updateGuessesLeft = function() {
	
  // How many guesses are left
	
  document.querySelector('#guessNumLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
	
  // What was guessed so far 
	
  document.querySelector('#soFar').innerHTML = "What You guessed so far: " + guessedLetters.join(', ');
};
// reset and call the function

var reset = function() {
 totalGuesses = 9; guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess(); updateGuessesLeft();  updateGuessesSoFar();
}

updateLetterToGuess(); updateGuessesLeft();


//keyup = the user's guess

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess); updateGuessesLeft(); updateGuessesSoFar();

   if (guessesLeft > 0){
        if (userGuess == letterToGuess){
                wins++;
                 document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You win! There's a Psychic in the house!"); reset();
            }
      }else if(guessesLeft == 0){
			
            // Show the number of losses  and then reset the game
			
       losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
		  		alert("You lose! Try again."); reset();
        }
};
