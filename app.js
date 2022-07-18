const possibleChoices = ["rock", "paper", "scissors"];
let winner = [];
let computerSelection =  possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
console.log("Computer chose " + `${computerSelection}`);


function game() {
    for (let i = 0; i < 5; i ++){
        playRound();
    }
}

let playerSelection = prompt("Choose rock, paper or scissors?");
if (playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "scissors") {
  console.log("You chose " + `${playerSelection.toLowerCase()}`);
} else {
  console.log("Error! Try again!");
}


function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return "Player Wins!";
    } else if (
      (playerSelection === "rock" && computerSelection == "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      return "Computer Wins!";
    } else {
      return "Tie";
    }
  }

  for (let i = 0; i < 5; i++){
    playerSelection = "rock";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
 }