/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import player from "Player/Player.mjs";

import { doc } from "prettier";

let players = [];

function showPlayerEvent(event) {
  let infoPlayer = document.getElementById("PlayerInfo");

  let hayBanquero = players.some((player) => player.isTheBank());
  let checkBanca = document.getElementById("Banca");
  checkBanca.setAttribute('readonly',hayBanquero);

  infoPlayer.style.visibility = "visible";
}

function hidePlayerEvent(event) {
  let infoPlayer = document.getElementById("PlayerInfo");
  infoPlayer.style.visibility = "hidden";
}

function startGame(event) {
  // let todook = validateInitialPlayers(players);
  // if (todook != "" ) console.log(todook);

}

function addPlayer(event) {
  let name = document.getElementById("nombre");
  let isBank = document.getElementById("Banca");

  players.push(new player(name.value, isBank.checked));

  name.value = "";
  isBank.checked = false;
  event.preventDefault();

  hidePlayerEvent();
  printInfoPlayer();
}

function printInfoPlayer() {
  let info = document.getElementById("bodyInfo");
  info.innerHTML = "";
  players.map((player) => {
    let playerTr = document.createElement("tr");
    let playerTd = document.createElement("td");
    playerTd.innerText = `${player.getPlayer()}`;
    playerTr.appendChild(playerTd);

    let playerBankTd = document.createElement("td");
    playerBankTd.innerText = player.isTheBank() ? "Si" : "";
    playerTr.appendChild(playerBankTd);
    info.appendChild(playerTr);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let newPlayer = document.querySelector('input[name="newPlayer"]');
  newPlayer.addEventListener("click", showPlayerEvent);

  let buttonStart = document.querySelector('input[name="Start"]');
  buttonStart.addEventListener("click", startGame);

  let buttonAddPlayer = document.querySelector('input[name="AddPlayer"]');
  buttonAddPlayer.addEventListener("click", addPlayer);
});
