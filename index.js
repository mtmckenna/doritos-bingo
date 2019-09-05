import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";

import "./index.css";
import { GUMMIS, DORITOS, shuffle } from "./shared";

const table = document.getElementsByTagName("table")[0];
const rows = table.getElementsByTagName("tr");
let count = 0;

async function go() {
  while (count < 5) {
    shuffle(GUMMIS);
    shuffle(DORITOS);
    let doritosInPlay = DORITOS.slice(0, 5);

    GUMMIS.forEach((gummi, i) => {
      const cell = rows[i + 1].getElementsByTagName("td")[0];
      cell.style.backgroundImage = `url(${gummi.img})`;
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

function saveImage(name) {
  return htmlToImage
    .toBlob(document.getElementsByClassName("wrapper")[0], { backgroundColor: "#fff" })
    // .then((blob) => { saveAs(blob, `${name}.png`) });
}

go();
