import DeckCards from "./DeckCards/DeckCards.js";
import player from "./Player/Player.mjs";
import {
  canContinueGame,
  whoWin,
  validateInitialPlayers,
  playGame,
} from "./SieteMedio/Rules.mjs";
import { ask, askForPlayer, askForNextAction } from "./prompt/question.mjs";

let players = [];
let deck = new DeckCards();

do {
  let playerInfo = askForPlayer();
  players.push(new player(playerInfo.name, playerInfo.isBank));
} while (ask("Otro Jugador?") === "S");

let todook = validateInitialPlayers(players);
if (todook != "") {
  console.log(todook);
} else {
  console.log("Abriendo baraja...");
  deck.inicializateDeck();
  console.log("Mezclando baraja...");
  deck.suffleCards();

  players.forEach((player) => playGame(player, deck));
  console.log(`Ha ganado ${whoWin(players)}`);
}