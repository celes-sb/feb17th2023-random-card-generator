/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const icons = ["♦", "♥", "♠", "♣"];
const suits = ["diamondSymbol", "heartSymbol", "spadeSymbol", "clubSymbol"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];

const randomSuitIndex = Math.floor(Math.random() * suits.length);
const randomValueIndex = Math.floor(Math.random() * values.length);
const randomIconsIndex = Math.floor(Math.random() * icons.length);

const cardHTML = `
<div id="card-symbol-top" class="cardSymbol ${suits[randomSuitIndex]}">${icons[randomIconsIndex]}</div>
      <div class="card-number">
        <h2>${values[randomValueIndex]}</h2>
      </div>
      <div id="card-symbol-bottom" class="cardSymbol ${suits[randomSuitIndex]}">${icons[randomIconsIndex]}</div>
`;

const cardContainer = document.querySelector("#card");
cardContainer.innerHTML = cardHTML;
