let humanScore = 0;
let computerScore = 0;
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let replayButton = document.createElement("button");
let scoreDiv = document.getElementById("scores");
let textDiv = document.getElementById("text");
let humanScoreDiv = document.getElementById("humanscore");
let computerScoreDiv = document.getElementById("computerscore");
replayButton.textContent = "Replay!";
replayButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreDiv.textContent="Your Score: 0";
    computerScoreDiv.textContent="Computer Score: 0";
    replayButton.remove();
    textDiv.textContent="First to 5 wins!"
});
    rockButton.addEventListener("click", () => playRound("rock"))
    paperButton.addEventListener("click", () => playRound("paper"))
    scissorsButton.addEventListener("click", () => playRound("scissors"))   


function playRound(button) {
    if(humanScore>=5 || computerScore>=5) {
        
        return;
    }
    const computerSelection = getComputerChoice();
    const humanSelection = button.toLowerCase();
    
    if(humanSelection == computerSelection.toLowerCase()) {
        textDiv.textContent = "Draw! " + computerSelection +  " is the same as " + computerSelection + "!";
        humanScoreDiv.textContent = "Your Score: " + humanScore;
        computerScoreDiv.textContent = "Computer Score " + computerScore;
    } else if(humanSelection == "rock" && computerSelection =="Paper") {
        textDiv.textContent = "You lose! Paper coats Rock!";
        computerScore++;
        humanScoreDiv.textContent = "Your Score: " + humanScore;
        computerScoreDiv.textContent = "Computer Score " + computerScore;
    } else if(humanSelection == "rock" && computerSelection =="Scissors") {
        textDiv.textContent = "You win! Rock beats Scissors!";
        humanScore++;
        humanScoreDiv.textContent = "Your Score: " + humanScore;
        computerScoreDiv.textContent = "Computer Score " + computerScore;
    } else if(humanSelection == "paper" && computerSelection=="Rock") {
        textDiv.textContent = "You win! Paper coats Rock!";
        humanScore++;
        humanScoreDiv.textContent = "Your Score: " + humanScore;
        computerScoreDiv.textContent = "Computer Score " + computerScore;
    }else if(humanSelection == "paper" && computerSelection=="Scissors") {
        textDiv.textContent = "You lose! Scissors cut Paper!";
        computerScore++;
        humanScoreDiv.textContent = "Your Score: " + humanScore;
        computerScoreDiv.textContent = "Computer Score " + computerScore;
    }else if(humanSelection == "scissors" && computerSelection=="Rock") {
        textDiv.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
        humanScoreDiv.textContent = "Your Score: " + humanScore;
        computerScoreDiv.textContent = "Computer Score " + computerScore;
    }
    else if(humanSelection == "scissors" && computerSelection=="Paper") {
        textDiv.textContent = "You win! Scissors cut Paper!";
        humanScore++;
        humanScoreDiv.textContent = "Your Score: " + humanScore;
        computerScoreDiv.textContent = "Computer Score " + computerScore;
    }
    if(humanScore == 5) {
        textDiv.textContent = "You win the game! Well done!";
    }
    if(computerScore == 5) {
        textDiv.textContent = "You lose the game! Better luck next time!";
    }
    if(humanScore>=5 || computerScore>=5) {
        
        scoreDiv.appendChild(replayButton);
        
    }
}
    

function getComputerChoice() {
    let number = Math.floor(Math.random()*100);
    let choice = "";
    if(number < 33) {
        choice="Rock";
    }
    else if(number >= 33 && number < 66) {
        choice="Paper";
    } else if(number >66) {
        choice="Scissors";
    }
    return choice;
}
function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors?")
    return choice;
}
function testRandom() {
let rock = 0;
let scissors = 0;
let paper = 0;
let counter = 0;
while(counter <1000000) {
    if(getComputerChoice() == "Rock") {
        rock++;
    }
    if(getComputerChoice() == "Paper") {
        paper++;
    }
    if(getComputerChoice() == "Scissors") {
        scissors++;
    }
    counter++;
}
console.log("Rock: " + rock);
console.log("Paper: " + paper);
console.log("Scissors: " + scissors);
}

