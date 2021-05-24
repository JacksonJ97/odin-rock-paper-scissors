function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

computerPlay();

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let result = "";

  if (playerSelection === computerSelection) {
    result = "Draw";
  }

  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result = "You lose";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "You win";
  }

  return result;
}
