"use strict";
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 10;
let highscore = 0;
function game() {
  const guess = Number(document.querySelector(".guess").value);
  // when no number is given
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";

    //when number is correct.
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉🎉Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // updates new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too High" : "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You have lost the game";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
}
document.querySelector(".check").addEventListener("click", game);
//Resets the whole game except highscore
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    game();
  }
});
