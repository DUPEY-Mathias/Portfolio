var audio = new Audio("sound/Ambiant.mp3");
var sample = new Audio("sound/Switch.wav"); // sample.play();
const fader = document.querySelector(".fader");
const content1 = document.querySelector(".content1");

audio.play();
sample.play();

window.addEventListener("scroll", () => {
  var z = 1 / ((window.scrollY || window.pageYOffset) / 20);
  var y = (window.scrollY || window.pageYOffset) / 500;

  if (y > 0.95) {
    y = 0.95;
  }

  fader.style.opacity = `${y}`;
  content1.style.opacity = `${z}`;
});

var root = document.documentElement;
document.addEventListener("mousemove", (evt) => {
  let x = evt.clientX / innerWidth;
  let y = evt.clientY / innerHeight;
  root.style.setProperty("--m-x", x);
  root.style.setProperty("--m-y", y);
});
