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
var answer;

var problemList = {
    "CSS lets you execute scripts on your webpage.": false,
    "Strings can be thought of as 'read only' arrays.": true,
    ".getElementbyId gives you the value of the element selected": false,
    "You must use .append() to make JavaScript created elements visible on the webpage.": true,
    "event.preventDefault() keeps a form from refreshing the webpage": true,
    "To convert a string to a number, you use the Numerals() method.": false,
    "Arrays are contained within {}.": false,
    "stopInterval() cancels a setInterval loop.": false,
    "Object properties are in an ordered list.": false,
    "Under no circumstances should you never not call a variable before it is used.": false,
    "Functions declared by 'function functionName(){}' will run when the page loads.": false,
    "Accessing an entry in an array can be done with arrayName[entryIndex].": true,
    "Javascript needs to be linked below any elements it references in the html.": true,
    ".innerHTML() and .textContent() are functionally the same.": false,
}

// Create arrays to be able to select random questions and validate them
var questionList = Object.keys(problemList);
var answerList = Object.values(problemList);

function initiateGame(){
    // Reset score and time in case of previous attempts
    finalScore = 0;
    time = 60;
    timeLeft.textContent = time;
    guessFeedback.textContent = "";
    // Generate random question and display it
    var problemIndex = Math.floor(Math.random() * (questionList.length))
    question.textContent = questionList[problemIndex];
    question.setAttribute("style", "font-size:30px")
    var answer = answerList[problemIndex];

    // Game timer will update every second, and when the timer hits zero, 
    // end the game and display the score submission screen
    gameTimer = setInterval(function(){
        time--;
        timeLeft.textContent = time;

        if(time <= 0){
            timeLeft.textContent = 0;
            // hide true/false buttons, show score submission form and new game button, display score
            guessTrue.setAttribute("style", "display: none");
            guessFalse.setAttribute("style", "display: none");
            scoreForm.setAttribute("style", "display: flex");
            newGame.setAttribute("style", "display: flex");
            question.textContent = "Game Over! Your score was " + finalScore + ".";
            guessFeedback.textContent = "";
            clearInterval(gameTimer);
        }
        else{
            return;
        }
    }, 1000)

}

// When a name is entered and submitted, store score, remove form, and offer a new game
submitScore.addEventListener("click", function(event){
    event.preventDefault();
    if (initials.value !== ""){
        localStorage.setItem(initials.value.trim(), finalScore);
        scoreForm.setAttribute("style", "display: none")
        scoreForm.reset();
        question.textContent = "Score saved! Click 'view scores' to see your ranking, or play again!";
    }
    // Do nothing if submit field is empty
    else{
        return;
    }
})

// When a new game is requested, hide the new game button, display the game GUI, and begin.
newGame.addEventListener("click", function(){
    guessTrue.setAttribute("style", "display: flex");
    guessFalse.setAttribute("style", "display: flex");
    newGame.setAttribute("style", "display: none");
    scoreForm.setAttribute("style", "display: none");
    initiateGame();
})

// True and False button functionality for the game. They are exactly the same apart from whether they
// evaluate true or false as correct, so I won't be repeating comments within.
guessTrue.addEventListener("click", function(){
    // if guess is correct, add to score
    if (answer){
        finalScore++;
        guessFeedback.textContent = "Correct, your current score is " + finalScore;
        guessFeedback.setAttribute("style", "color: green")
    }
    // if guess is incorrect, subtract 5 seconds from remaining time
    else{
        time = time - 5;
        guessFeedback.textContent = "Incorrect, your current score is " + finalScore;
        guessFeedback.setAttribute("style", "color: red")
    }
    // correct or not, generate a new question
    problemIndex = Math.floor(Math.random() * (questionList.length))
    question.textContent = questionList[problemIndex];
    answer = answerList[problemIndex];
})

guessFalse.addEventListener("click", function(){
    if (!answer){
        finalScore++;
        guessFeedback.textContent = "Correct, your current score is " + finalScore;
        guessFeedback.setAttribute("style", "color: green")
    }
    else{
        time = time - 5;
        guessFeedback.textContent = "Incorrect, your current score is " + finalScore;
        guessFeedback.setAttribute("style", "color: red")
    }
    problemIndex = Math.floor(Math.random() * (questionList.length ))
    question.textContent = questionList[problemIndex];
    answer = answerList[problemIndex];
})