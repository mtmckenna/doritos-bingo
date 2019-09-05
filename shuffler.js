import { GUMMIS, DORITOS } from "./shared";
import "./index.css";


const doritosImage = document.getElementsByClassName("doritos-drawn")[0];
const gummiImage = document.getElementsByClassName("gummi-drawn")[0];
const button = document.getElementsByClassName("shuffle")[0];
const duration = 2500;
const numDraws = 30;
let times = [];
let readyToShuffle = false;
let startTime = 0;

button.addEventListener("click", () => readyToShuffle = true);

showRandomDraw();

function animate(time) {
  requestAnimationFrame(animate);
  if (readyToShuffle) {
    generateDrawTimes(time);
    readyToShuffle = false;
  }

  const timeForNextImage = times[times.length - 1];
  if (times.length > 0 && timeForNextImage < time) {
    showRandomDraw();
    times.pop();
  }
}

function showRandomDraw() {
  const dorito = randomElementFromArray(DORITOS);
  doritosImage.innerHTML = "";
  doritosImage.appendChild(dorito.imageElement);
  doritosImage.innerHTML += `<br />${dorito.name}`;
  const gummi = randomElementFromArray(GUMMIS);
  gummiImage.innerHTML = "";
  gummiImage.appendChild(gummi.imageElement);
  gummiImage.innerHTML += `<br />${gummi.name}`;
}

function randomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateDrawTimes(time) {
  startTime = time;
  times = [];
  for (let i = 0; i < numDraws; i++) {
    times.push(time + i / numDraws * duration);
  }

  times.reverse();
}

requestAnimationFrame(animate);
