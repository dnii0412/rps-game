// choices
// win condition if bot or player wins?
// display win points each wins

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

// win or lose and tie
const winTxt = document.querySelector(".player-win");
const botWinTxt = document.querySelector(".bot-win");
const tieTxt = document.querySelector(".tie");

// displpay the choices
const playerTxt = document.querySelector(".player");
const botTxt = document.querySelector(".computer");

// player score Values
let playerScore = document.getElementById("player-point");
let botScore = document.getElementById("bot-point");

// player choice values
let playerChoice = "";
let botChoice = "";

rock.addEventListener("click", () => handlePlayerChoice("rock"));
paper.addEventListener("click", () => handlePlayerChoice("paper"));
scissor.addEventListener("click", () => handlePlayerChoice("scissor"));

document.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") {
    handlePlayerChoice("rock");
  } else if (event.key === "s" || event.key === "S") {
    handlePlayerChoice("paper");
  } else if (event.key === "d" || event.key === "D") {
    handlePlayerChoice("scissor");
  }
});
// Bot choice values
const values = ["rock", "paper", "scissors"];

// Function to get bot's random choice
function getBotChoice() {
  const randomValue = Math.floor(Math.random() * values.length);
  return values[randomValue];
}

// Function to handle player's choice
function handlePlayerChoice(choice) {
  playerChoice = choice;
  botChoice = getBotChoice();
  // playerTxt.textContent += " " + playerChoice;
  console.log("player choice: ", playerChoice);
  compareChoices();
}
// TODO: Compare choices and determine winner
function compareChoices() {
  // tie
  if (playerChoice === botChoice) {
    tieTxt.style.display = "block";
    winTxt.style.display = "none";
    botWinTxt.style.display = "none";
    // botTxt.textContent += " " + botChoice;
    // playerTxt.textContent += " " + playerChoice;
    return "tie";
  }
  // player win conditions
  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissor" && botChoice === "paper")
  ) {
    winTxt.style.display = "block";
    botWinTxt.style.display = "none";
    tieTxt.style.display = "none";
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
    // playerTxt.textContent += " " + playerChoice;
    // botTxt.textContent += " " + botChoice;
    return "player-win";
  }
  // bot win conditions
  if (
    (playerChoice === "paper" && botChoice === "scissors") ||
    (playerChoice === "scissor" && botChoice === "rock") ||
    (playerChoice === "rock" && botChoice === "paper")
  ) {
    document.querySelector(".bot-win").style.display = "block";
    botScore.textContent = parseInt(botScore.textContent) + 1;
    botWinTxt.style.display = "block";
    winTxt.style.display = "none";
    tieTxt.style.display = "none";
    // playerTxt.textContent += " " + playerChoice;
    // botTxt.textContent += " " + botChoice;
    return "bot-win";
  }
}
// TODO: Update scores
// TODO: Display results
