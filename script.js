import { UI } from "/UI.js";

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
  console.log(getGameResult(playerChoice, CPUchoice));
  return getGameResult(playerChoice, CPUchoice);
};

let scoreCount = (outcome) => {
  UI.RESULTS.OUTCOME.textContent = outcome;
  if (outcome === "You won!") {
    UI.RESULTS.PLAYERSCORE.
    //НАДО ЧТОБЫ ЗНАЧЕНИЕ СЧЕТА ЗАПИСЫВАЛОСЬ КАК ЧИСЛО В ПЕРЕМЕННУЮ
  }
};

let checkScore = (playerScore, CPUscore)

UI.BUTTONS.ROCK.addEventListener("click", function (e) {
  play(e.target.dataset.selection);
  outcome = play(e.target.dataset.selection);
  scoreCount(outcome);
});

UI.BUTTONS.PAPER.addEventListener("click", function (e) {
  play(e.target.dataset.selection);
});

UI.BUTTONS.SCISSORS.addEventListener("click", function (e) {
  play(e.target.dataset.selection);
});


checkCount(/*UI DOM OBJECTS*/);