function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

computerPlay();

// function playRound(playerSelection, computerSelection) {
//   let result = "";

//   if (playerSelection === "rock" && computerSelection === "rock") {
//     result = "Draw";
//   }
//   if (playerSelection === "rock" && computerSelection === "paper") {
//     result = "You lose";
//   }
//   if (playerSelection === "rock" && computerSelection === "scissors") {
//     result = "You win";
//   }
//   if (playerSelection === "paper" && computerSelection === "rock") {
//     result = "You win";
//   }
//   if (playerSelection === "paper" && computerSelection === "paper") {
//     result = "Draw";
//   }
//   if (playerSelection === "paper" && computerSelection === "scissors") {
//     result = "You lose";
//   }
//   if (playerSelection === "scissors" && computerSelection === "rock") {
//     result = "You lose";
//   }
//   if (playerSelection === "scissors" && computerSelection === "paper") {
//     result = "You win";
//   }
//   if (playerSelection === "scissors" && computerSelection === "scissors") {
//     result = "Draw";
//   }
//   console.log(computerSelection);
//   return result;
// }

// const playerSelection = "rock";
// console.log(playRound(playerSelection, computerPlay()));
