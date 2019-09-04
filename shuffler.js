import { GUMMIS, DORITOS, shuffle } from "./shared";
import "./index.css";


import { easeInOutExpo } from 'js-easing-functions';

const doritosImage = document.getElementsByClassName("doritos-drawn")[0];
const gummyImage = document.getElementsByClassName("gummy-drawn")[0];
const duration = 2000;
const startPosition = 0;
const endPosition = 100;

let startTime;

function animate() {
  startTime = performance.now();
  tick(startTime);
}

function tick(time) {
  const elapsed = time - startTime;
  const easing = easeInOutExpo(elapsed, startPosition, endPosition, duration);
  doritosImage.style.transform = `translateY(${easing}px)`;

  if (elapsed < duration) {
    requestAnimationFrame(tick);
  }
}

animate();