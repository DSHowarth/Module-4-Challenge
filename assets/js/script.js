var timeLeft = document.getElementById("time");
var question = document.getElementById("question");
var initials = document.getElementById("initials");
var scoreForm = document.getElementById("saveScore");
var submitScore = document.getElementById("submitScore");
var newGame = document.getElementById("newGame");
var guessTrue = document.getElementById("isTrue");
var guessFalse = document.getElementById("isFalse");
var guessFeedback = document.getElementById("guessFeedback");
var finalScore = 0;
var time = 60;

var questionList = [
    "CSS lets you execute scripts on your webpage",
    "Strings can be thought of as 'read only' arrays.",
]

var answerList = [
    false,
    true,
]

function initiateGame(){
    finalScore = 0;
    time = 60;
    timeLeft.textContent = time;

    setInterval(function(){
        time--;
        timeLeft.textContent = time;
    }, 1000)

    while(time > 0){

    }
}

// When a name is entered and submitted, store score, remove form, and offer a new game
submitScore.addEventListener("click", function(event){
    event.preventDefault();

    if (initials.value !== ""){
        localStorage.setItem(initials.value, JSON.stringify(finalScore));
        scoreForm.setAttribute("style", "display: none")
        scoreForm.reset();
        question.textContent = "Score saved! Click 'view scores' to see your ranking, or play again!";
    }
    else{
        return;
    }
})

// When a new game is requested, hide the new game button, display the game GUI, and begin.
newGame.addEventListener("click", function(){
    guessTrue.setAttribute("style", "display: flex");
    guessFalse.setAttribute("style", "display: flex");
    newGame.setAttribute("style", "display: none");
    initiateGame();
})