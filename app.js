const gameField = document.getElementById("game");
const mainMenu = document.getElementById("main-menu");
const timerHolder = document.getElementById("timer-holder");
const secondIndicator = document.getElementById("scnd-txt");
const startBtn = document.getElementById("startBtn");

function start() {
  mainMenu.style.display = "none";
  gameField.style.display = "block";
}

// event listeners

let count = 1;

function startTimer() {
  const timer = setInterval(() => {
    count--;
    timerHolder.textContent = count;

    if (count <= 0) {
      clearInterval(timer);
      timerHolder.textContent = "Time's Up!";
      secondIndicator.style.display = "none";
      startBtn.textContent = "Start Again";
    }
  }, 1000); // Update every 1000 milliseconds (1 second)
}
