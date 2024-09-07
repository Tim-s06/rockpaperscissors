
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
