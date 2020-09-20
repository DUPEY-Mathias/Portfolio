var audio = new Audio("sound/Ambiant.mp3");
var sample = new Audio("sound/Switch.wav"); // sample.play();
const fader = document.querySelector(".fader");
const content1 = document.querySelector(".content1");

audio.play();
sample.play();

console.log(
  "Ah! I See You Are A Man Of Culture As Well. Je vous en prie, je vous invite à regarder une partie de mon code dans les moindres détails, si en revanche vous vous demandez comment j'ai bien pu faire pour faire bouger cette tête, sachez simplement qu'il s'agit de Three.js reconnaissable au Canvas. J'ai ici uttilisé un Loader GLTFL pour pouvoir charger mes modèles 3D plus rapidement et stablement sur le Web. Ma tête quant à elle à été prise en photo par mon téléphone, photo qui, une fois sur blender, m'ont permis de me représenter aussi adroitement que je le pouvais. Pour tout autre information ou simplement me dire bonjour, je vous invite à me contacter sur mon adresse mail disponible au bas de cette page. Portez vous bien. -Mathias"
);

window.addEventListener("scroll", () => {
  var z = 1 - (window.scrollY || window.pageYOffset) / 200;
  var y = (window.scrollY || window.pageYOffset) / 500;

  if (z < 0) {
    z = 0;
  }

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
