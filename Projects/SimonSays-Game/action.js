let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "blue"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let hscore = 0;
document.addEventListener("keydown", function () {
  if (start == false) {
    console.log("Game Started");
    start = true;
    levelUp();
  }
});
function gameflash(btn) {
  btn.classList.add("gameflash");
  setTimeout(function () {
    btn.classList.remove("gameflash");
  }, 400);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 400);
}
function checkGame(idx) {
  if (gameseq[idx] == userseq[idx]) {
    if (gameseq.length == userseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over !! Your score : <b>${level}<b><br>Press any key to Start Again.`;
    reset();
  }
}
function reset() {
  let Hscore = document.querySelector("#score");
  if (hscore < level) {
    Hscore.innerText = `High Score: ${level - 1}`;
    hscore = level - 1;
  }

  start = false;
  gameseq = [];
  level = 0;
  userseq = [];
}

function levelUp() {
  userseq = [];
  level++;
  let ranidx = Math.floor(Math.random() * 4);
  let rancolor = btns[ranidx];

  h2.innerText = `level - ${level}`;
  gameseq.push(rancolor);
  let randbtn = document.querySelector(`.${rancolor}`);
  gameflash(randbtn);
}
function btnPressed() {
  console.log("button was pressed");
  let btn = this;
  userseq.push(this.getAttribute("id"));
  userflash(this);
  checkGame(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (buttons of allbtns) {
  buttons.addEventListener("click", btnPressed);
}
