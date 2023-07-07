var scoreList = document.getElementById("scoreList");


function displayScores(){

    //turn localStorage object into array
    var scores = Object.entries(localStorage);

    // Sort by score value
    scores.sort(function(a,b){
        return a[1] - b[1];
    });

    //create new list item for each score, and add it to the page in descending order
    for(var i = (scores.length - 1); i >= 0; i--){
        var newScore = document.createElement("li");
        newScore.textContent = scores[i][0] + " - " + scores[i][1];
        scoreList.append(newScore); 
    }
}

displayScores();