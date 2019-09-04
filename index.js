import "./index.css";

import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

const GUMMIS = [
  { name: "Bears", img: "gummi-bears.jpg" },
  { name: "Butterflies", img: "gummi-butterflies.jpg" },
  { name: "Jets", img: "gummi-jets.jpg" },
  { name: "Worms", img: "gummi-worms.jpg" },
  { name: "Frogs", img: "gummi-frogs.jpg" },
];

const DORITOS = [
  { name: "Flamas", img: "doritos-flamas.jpeg" },
  { name: "Blaze", img: "doritos-blaze.jpeg" },
  { name: "Taco", img: "doritos-taco.jpeg" },
  { name: "Tapatio", img: "doritos-tapatio.jpeg" },
  { name: "Salsa Verde", img: "doritos-salsa-verde.jpeg" },
  { name: "Poppin' Jalepeno", img: "doritos-poppin-jalepeno.jpeg" },
  { name: "Flamin' Hot", img: "doritos-flamin-hot.jpeg" },
  { name: "Jacked Ranch Dipped Hot Wings", img: "doritos-jacked-ranch-dipped-hot-wings.jpeg" },
  { name: "Spicy White Cheddar", img: "doritos-spicy-white-cheddar.jpeg" },
  { name: "Nacho Cheese", img: "doritos-nacho-cheese.jpeg" },
  { name: "Cool Ranch", img: "doritos-cool-ranch.jpeg" },
  { name: "Spicy Sweet Chili", img: "doritos-spicy-sweet-chili.jpeg" },
  { name: "Chile Limon", img: "doritos-chile-limon.jpeg" },
  { name: "Spicy Nacho", img: "doritos-spicy-nacho.jpeg" },
];

const table = document.getElementsByTagName("table")[0];

const rows = table.getElementsByTagName("tr");

let count = 0;

async function go() {
  while (count < 5) {
    shuffle(GUMMIS);
    shuffle(DORITOS);
    let doritosInPlay = DORITOS.slice(0, 5);

    GUMMIS.forEach((gummy, i) => {
      const cell = rows[i + 1].getElementsByTagName("td")[0];
      cell.style.backgroundImage = `url(${gummy.img})`;
    });

    doritosInPlay.forEach((doritos, i) => {
      const cell = rows[0].getElementsByTagName("td")[i + 1];
      cell.style.backgroundImage = `url(${doritos.img})`;
    });

    for (let i = 0; i < 5; i++) {
      const row = rows[i + 1];
      const rowValue = GUMMIS[i];
      for (let j = 0; j < 5; j++) {
        const colValue = doritosInPlay[j];
        const cell = row.getElementsByTagName("td")[j + 1];
        cell.innerText = `${rowValue.name} + ${colValue.name}`;
      }
    }

    const freeCell = rows[3].getElementsByTagName("td")[3];
    freeCell.innerText = "";
    freeCell.style.backgroundImage = "url(alien.png)";
    await saveImage(`doritos-bingo-${count}`);
    count++;
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function saveImage(name) {
  return htmlToImage
    .toBlob(document.getElementsByClassName("wrapper")[0], { backgroundColor: "#fff" })
    // .then((blob) => { saveAs(blob, `${name}.png`) });
}

go();
