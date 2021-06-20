function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function userPlay() {
  const input = prompt("Rock, Paper, or Scissors");
  return input;
}

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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === "You win") {
      playerScore++;
    }

    if (result === "You lose") {
      computerScore++;
    }

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(result);
    console.log(playerScore);
    console.log(computerScore);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game.");
  } else {
    console.log("Tie game");
  }
}

game();
