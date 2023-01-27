import { UI } from "/UI.js";

let playerScore = 0;
let CPUscore = 0;

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

let getGameResult = (playerChoice, CPUchoice) => {
  let outcome = "";
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
  return outcome;
};

let play = (playerSelection) => {
  let CPUchoice = getComputerChoice();
  let playerChoice = playerSelection.toLowerCase();
  return getGameResult(playerChoice, CPUchoice);
};

let scoreCount = (outcome) => {
  UI.RESULTS.OUTCOME.textContent = outcome;
  switch (outcome) {
    case "You won!":
      playerScore += 1;
      console.log(`Player: ${playerScore}`);
      UI.RESULTS.PLAYERSCORE.textContent = String(playerScore);
      break;
    case "You lost!":
      CPUscore += 1;
      console.log(`CPU: ${CPUscore}`);
      UI.RESULTS.CPUSCORE.textContent = String(CPUscore);
      break;
    default:
      console.log("Draw!");
  }
  checkCount();
};

UI.BUTTONS.ROCK.addEventListener("click", function (e) {
  play(e.target.dataset.selection);
  let outcome = play(e.target.dataset.selection);
  scoreCount(outcome);
});

UI.BUTTONS.PAPER.addEventListener("click", function (e) {
  play(e.target.dataset.selection);
  let outcome = play(e.target.dataset.selection);
  scoreCount(outcome);
});

UI.BUTTONS.SCISSORS.addEventListener("click", function (e) {
  play(e.target.dataset.selection);
  let outcome = play(e.target.dataset.selection);
  scoreCount(outcome);
});

function startOver() {
  playerScore = 0;
  CPUscore = 0;
  UI.RESULTS.PLAYERSCORE.textContent = String(playerScore);
  UI.RESULTS.CPUSCORE.textContent = String(CPUscore);
  UI.RESULTS.OUTCOME.textContent = "...";
}

function checkCount() {
  if (playerScore == 5) {
    alert("You have won the game!");
    startOver();
  } else if (CPUscore == 5) {
    alert("You have lost the game!");
    startOver();
  } else return false;
}
