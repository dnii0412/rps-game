// choices
// win condition if bot or player wins?
// display win points each wins

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

let playerScore = document.getElementById("player-point");
let botScore = document.getElementById("bot-point");

let playerChoice = "";
let botChoice = "";
rock.addEventListener("click", () => handlePlayerChoice("rock"));
paper.addEventListener(type, listener)

// Bot choice values
const values = ["rock", "paper", "scissors"];

// Function to get bot's random choice
function getBotChoice() {
  const randomValue = Math.floor(Math.random() * values.length);
  return values[randomValue];
}

// Function to handle player's choice

// TODO: Compare choices and determine winner
// TODO: Update scores
// TODO: Display results
