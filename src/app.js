/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let numCambios = 5;
  let cronoActivado = false;

  let topIcon = document.getElementById("topIcon");
  let bottonIcon = document.getElementById("bottonIcon");
  let numberCard = document.getElementById("numberCard");
  let buttonRefresh = document.getElementById("buttonRefresh");
  let alertt = document.getElementById("alertas");

  let numbersAndImperial = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let palo = ["♦", "♥", "♠", "♣"];

  function cartaAleatoria() {
    let numRandom = Math.floor(Math.random() * numbersAndImperial.length);
    let paloRandom = Math.floor(Math.random() * palo.length);
    let numAzar = numbersAndImperial[numRandom];
    let paloAzar = palo[paloRandom];
    if (paloAzar === "♦" || paloAzar === "♥") {
      topIcon.style.color = "red";
      bottonIcon.style.color = "red";
    } else {
      topIcon.style.color = "black";
      bottonIcon.style.color = "black";
    }

    topIcon.innerText = paloAzar;
    bottonIcon.innerText = paloAzar;
    numberCard.innerText = numAzar;
  }
  // let bucleCarta = setInterval(() => {
  //   console.log(numCambios);
  // }, 4000);

  function temporizador() {
    setTimeout(() => {
      cartaAleatoria();
      alertt.innerText = "cambio realizado, pulse de nuevo";
    }, 2000);
  }

  buttonRefresh.addEventListener("click", () => {
    temporizador();
    cronoActivado = false;

    alertt.innerText = "Generando carta... ";
  });

  cartaAleatoria();
};
