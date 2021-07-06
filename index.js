function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
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

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  userScore.textContent = `Player: ${playerScore}`;
  cpuScore.textContent = `Computer: ${computerScore}`;
  userSelection.textContent = "";
  cpuSelection.textContent = "";
  outcome.textContent = "";
  playAgain.style.display = "none";
  inputs.forEach((input) => {
    input.disabled = false;
  });
}

function game(playerSelection, computerSelection) {
  result = playRound(playerSelection, computerSelection);

  if (result === "You win") {
    playerScore++;
  }

  if (result === "You lose") {
    computerScore++;
  }

  userScore.textContent = `Player: ${playerScore}`;
  cpuScore.textContent = `Computer: ${computerScore}`;
  userSelection.innerHTML = `<i class="far fa-hand-${playerSelection}"></i>`;
  cpuSelection.innerHTML = `<i class="far fa-hand-${computerSelection}"></i>`;
  outcome.textContent = result;

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      outcome.textContent = "You win the game!";
    } else {
      outcome.textContent = "You lose the game.";
    }

    inputs.forEach((input) => {
      input.disabled = true;
    });

    playAgainContainer.appendChild(playAgain);
    playAgain.style.display = "block";
    playAgain.addEventListener("click", resetGame);
  }
}

let playerScore = 0;
let computerScore = 0;
const inputs = document.querySelectorAll("button");
const userScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".computer-score");
const userSelection = document.querySelector(".player-selection");
const cpuSelection = document.querySelector(".computer-selection");
const outcome = document.querySelector(".result-container");
const playAgainContainer = document.querySelector(".play-again-container");
const playAgain = document.createElement("button");
playAgain.classList.add("play-btn");
playAgain.textContent = "Play Again";

inputs.forEach((input) => {
  input.addEventListener("click", function () {
    playerSelection = input.value;
    computerSelection = computerPlay();
    game(playerSelection, computerSelection);
  });
});
