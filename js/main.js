var counterBtn = document.getElementById("counter");
var DecreaseBtn = document.getElementById("Decrease");
var ResetBtn = document.getElementById("Reset");
var IncreaseBtn = document.getElementById("Increase");
var count = 0;
DecreaseBtn.addEventListener("click", decrease);
function decrease() {
  count--;
  document.getElementById("counter").innerHTML = count;
}
IncreaseBtn.addEventListener("click", increase);
function increase() {
  count++;
  document.getElementById("counter").innerHTML = count;
}
ResetBtn.addEventListener("click", reset);
function reset() {
  count = 0;
  document.getElementById("counter").innerHTML = count;
}
