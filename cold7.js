function makehiter() {
  var newcreate = "";
  for (i = 1; i <= 200; i++) {
    var ran = Math.floor(Math.random() * 10);
    newcreate += `<div class="hitters">${ran}</div>`;
  }

  document.querySelector("#panel3").innerHTML = newcreate;
}
makehiter();
var timer = 60;
function timetravel() {
  var time = setInterval(() => {
    if (timer >= 0) {
      document.querySelector("#timerval").textContent = timer;

      timer--;
    } else {
      clearInterval(time);
      document.querySelector("#panel3").innerHTML = `<h1>Game Over</h1>`;
      document.querySelector("#over").style.display = block;
    }
  }, 1000);
}
timetravel();
var hitrn = 0;
function newhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
newhit();
var score = 0;

function scorevalue() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panel3").addEventListener("click", function (dets) {
  var clicked = Number(dets.target.textContent);
  if (clicked === hitrn) {
    scorevalue();
    newhit();
    makehiter();
  }
});
