/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { applyStyles } from "@popperjs/core";

window.onload = function() {
  //write your code here

  let switchCardButton = document.querySelector("#button");
  switchCardButton.addEventListener("click", function() {
    let icons = ["♦", "♥", "♠", "♣"];
    let values = [
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

    let randomValueIndex = Math.floor(Math.random() * values.length);
    let randomIconsIndex = Math.floor(Math.random() * icons.length);
    let randomSuits = Math.floor(Math.random() * icons.length);

    function colorSuits(icon) {
      if (icon === "♠" || icon === "♣") {
        return "black";
      } else {
        return "red";
      }
    }

    let cardHTML = `
  <div id="card-symbol-top" class="cardSymbol ${colorSuits(
    icons[randomIconsIndex]
  )}">${icons[randomIconsIndex]}</div>
  <div class="card-number">
    <h2>${values[randomValueIndex]}</h2>
  </div>
  <div id="card-symbol-bottom" class="cardSymbol ${colorSuits(
    icons[randomIconsIndex]
  )}">${icons[randomIconsIndex]}</div>
`;

    let cardContainer = document.querySelector("#card");
    cardContainer.innerHTML = cardHTML;
  });
};
