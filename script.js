let humanScore = 0;
let computerScore = 0;
function playRound() {
    const computerSelection = getComputerChoice();
    console.log("Computer Choice: " + computerSelection);
    const humanSelection = getHumanChoice().toLowerCase();
    
    
    if(humanSelection != "rock" && humanSelection !="paper" && humanSelection!="scissors") {
        console.log("You lose! Wrong input!")
        computerScore++;
    } else if(humanSelection == computerSelection.toLowerCase()) {
        console.log("Draw! " + computerSelection +  " is the same as " + computerSelection + "!");
    }else if(humanSelection == "rock" && computerSelection =="Paper") {
        console.log("You lose! Paper coats Rock!");
        computerScore++;
    } else if(humanSelection == "rock" && computerSelection =="Scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    } else if(humanSelection == "paper" && computerSelection=="Rock") {
        console.log("You win! Paper coats Rock!");
        humanScore++;
    }else if(humanSelection == "paper" && computerSelection=="Scissors") {
        console.log("You lose! Scissors cut Paper!");
        computerScore++;
    }else if(humanSelection == "scissors" && computerSelection=="Rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    }
    else if(humanSelection == "scissors" && computerSelection=="Paper") {
        console.log("You win! Scissors cut Paper!");
        humanScore++;
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
playRound();
