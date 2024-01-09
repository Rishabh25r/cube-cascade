
alert("Lets start the game");
var maxscore=prompt("Enter maximum desired score");
function rollDice() {
    
    // Get random numbers for the two dice
    const number1 = Math.floor(Math.random() * 6) + 1;
    const number2 = Math.floor(Math.random() * 6) + 1;

    // Update the dice visuals
    document.getElementById("dice1").innerText = number1;
    document.getElementById("dice2").innerText = number2;

    // Check if the numbers are equal
    if (number1 === number2) {
        // Update the score if the numbers are equal
        updateScore(number1);
    }
}

let score = 0;

function updateScore(increaseBy) {
    // Increase the score by the given amount
    score += increaseBy;

    // Update the score display
    document.getElementById("result").innerText = "Score: " + score;
    if(score>=maxscore){
    alert("Your have successfully finished the game");
   return 0;
    }
}
