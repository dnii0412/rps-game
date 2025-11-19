const gameField = document.getElementById("game");
const mainMenu = document.getElementById("main-menu");
const timerHolder = document.getElementById("timer-holder");
const startTimer = document.getElementById("startTimer");
function start() {
  mainMenu.style.display = "none";
  gameField.style.display = "block";
}

// timer

startTimer.addEventListener("click", startTimerFunc);
let seconds = 5;
let timer = null;

function updateDisplay() {
  timerHolder.textContent.seconds;
  console.log(timerHolder);
}

function startTimerFunc() {
  if (timer === null) {
    timer = setInterval(() => {
      seconds--;
      updateDisplay();
    }, 1000);
  }
}
