const startBtn = document.getElementById("startBtn");
const gameField = document.querySelector(".score");
const images = document.querySelector(".images");
gameField.style.display = "none";

function start() {
  startBtn.style.display = "none";
  gameField.style.display = "block";
  images.style.flexDirection = "column";
  images.style.alignItems = "start";
  images.style.marginTop = "24px";

  gameField.innerHTML += `
    <div className="score-field">
      <div className="player">
        
      </div>
    </div>
  `;
}
