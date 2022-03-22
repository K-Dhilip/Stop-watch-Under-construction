let b3 = document.getElementById("start");
let p1 = document.getElementById("display");

let dec = 0;
let sec = 0;
let min = 0;
let heu = 0;
let intervalId;
p1.textContent = heu + " : " + min + " :" + sec + " . " + dec;

b3.addEventListener("click", timer);

function timer() {
  intervalId = setInterval(function () {
    p1.textContent = heu + " : " + min + " : " + sec + " . " + dec;
    dec += 1;
    if (dec >= 10) {
      dec = 0;
      sec += 1;
    }
    if (sec >= 60) {
      sec = 0;
      min += 1;
    }
    if (min >= 60) {
      min = 0;
      heu += 1;
    }
  }, 100);
  document.getElementById("start").innerHTML = "stop";
}

function pause() {
  clearInterval(intervalId);
  document.getElementById("start").innerHTML = "start";
}
