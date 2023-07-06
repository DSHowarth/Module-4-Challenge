var timeLeft = document.getElementById("time");
var question = document.getElementById("question");
var initials = document.getElementById("initials");
var submitScore = document.getElementById("submitScore");
var newGame = document.getElementById("newGame")
var guessTrue = document.getElementById("isTrue");
var guessFalse = document.getElementById("isFalse");
var guessFeedback = document.getElementById("guessFeedback");
var finalScore = 0;

submitScore.addEventListener("click", function(event){
    event.preventDefault();
    // 
    localStorage.setItem(initials, JSON.stringify(finalScore));
})