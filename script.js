let getComputerChoice = () => {
  let number = Math.random() * 10;
  console.log(number);
  let result;
  if (number > 0 && number <= 3) {
    result = "rock";
  } else if (number > 3 && number <= 6) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
};

let play = () => {
  let CPUchoice = getComputerChoice();
  let playerSelection = prompt("Rock, paper or scissors?", "");
  let playerChoice = playerSelection.toLowerCase();
  let outcome;
  if (playerChoice === CPUchoice) {
    outcome = "Draw!";
  } else if (playerChoice === "rock" && CPUchoice === "scissors") {
    outcome = "You won!";
  } else if (playerChoice === "rock" && CPUchoice === "paper") {
    outcome = "You lost!";
  } else if (playerChoice === "paper" && CPUchoice === "scissors") {
    outcome = "You lost!";
  } else if (playerChoice === "paper" && CPUchoice === "rock") {
    outcome = "You won!";
  } else if (playerChoice === "scissors" && CPUchoice === "paper") {
    outcome = "You won!";
  } else if (playerChoice === "scissors" && CPUchoice === "rock") {
    outcome = "You lost!";
  } else outcome = "wrong imput!";
  alert(outcome);
};

for (let i = 0; i < 5; i++) {
  play();
}
