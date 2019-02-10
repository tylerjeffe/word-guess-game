$(document).ready(function() {

var wins = 0;
var losses = 0;
var remaining = 0;
var guessedletters = [];
var guessword = [];
var gamefinished = false
var currentWord




var letters = ["  A  ", "  B  ", "  C  ", "  D  ", "  E  ", "  F  ", "  G  ", "  H  ", "  I  ", "  J  ", "  K  ", "  L  ",  "  M  ", "  N  ", "  O  ", "  P  ", "  Q  ", "  R  ", "  S  ", "  T  ", "  U  ", "  V  ", "  W  ", "  X  ", "  Y  ", "  Z  "];

var words = ["BULLDOG", "POODLE", "BEAGLE", "CHIHUAHUA", "PUG", "GREYHOUND", "BOXER", "HUSKY",  "ROTTWEILER", "POMERANIAN",  "BLOODHOUND", "AKITA", "COLLIE", "PITTIE", "KELPIE", "BASENJI",  "BRITTANY",  "GREYHOUND", "LEONBERGER", "PUGGLE", "SCHNAUZER", "WEIMARANER", "WHIPPET", "XOLOITZCUINTLI"];
var currentword

function reset(){
    remaining=8;
    gamefinished=false;
    currentword = words[Math.floor(Math.random() * words.length)]
    guessedletters = [];
    guessword = []

    for (var i=0; i<(currentword.length); i++){
        guessword.push('  ______  ');
        console.log(guessword)
    }
    document.getElementById("currentword").innerText += guessword;
}; 
reset();

function updateDisplay() {

    document.getElementById("wins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessWord[i];
    }
    document.getElementById("remaining").innerText = remaining;
    document.getElementById("guessed").innerText = guessed;
    if(remaining <= 0) {
        alert("You Lose!");
        reset();
    }
};

document.onkeyup = function(guess) {

    if (gamefinished){
        reset();
        gamefinished=false;
    }
    else if(event.keyCode >= 65 && event.keyCode <= 90) {
            var letterguess = guess.key.toUpperCase();
            }    
    

    
    
    console.log(letterguess);
    console.log(guessedletters);
}
function makeGuess(letter) {
    if (remaining > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        // Make sure we didn't use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
    updateDisplay();
    checkWin();
};

// This function takes a letter and finds all instances of 
// appearance in the string and replaces them in the guess word.
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        if(selectableWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    // if there are no indicies, remove a guess and update the hangman image
    if (positions.length <= 0) {
        remainingGuesses--;
    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};
console.log



for(var i=0; i<letters.length ; i++ ){
    var letterchoice = $("<span>");

    letterchoice.addClass("choices");

    letterchoice.attr("data-letter" , letters[i]);

    letterchoice.text(letters[i]);

    $("#available").append(letterchoice);
    
};
console.log(currentword)


    





});