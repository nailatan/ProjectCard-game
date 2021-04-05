import DeckCards from "./DeckCards/DeckCards.js";
import player from "./Player/Player.mjs";
import { canContinueGame, whoWin } from "./SieteMedio/Rules.mjs";
import { ask, askForPlayer } from "./prompt/question.mjs";

let players = [];

do  {
  let playerInfo = askForPlayer();
  players.push(new player(playerInfo.name, playerInfo.isBank));
}while (ask("Otro Jugador?") === "S")
 console.log(players);

// let player1= new player("Natalia",true);
// let player2 = new player("Aina",false);
// let arrayPlayer= [player1, player2];

// while (canContinueGame(player1.getHand()) && player1.getTotalPoints() <=7) {
//     player1.addCard(deck.takeCard());
// }

// console.log(`Player: ${player1.getPlayer()} tiene ${player1.getTotalPoints()} puntos`);
// console.log(`  - Tiene alguna visible ${player1.someCardVisible()} y su mano es:`);
// player1.printHand();

// while (canContinueGame(player2.getHand()) && player2.getTotalPoints() < 6) {
//     player2.addCard(deck.takeCard());
// }

// console.log(`Player: ${player2.getPlayer()} tiene ${player2.getTotalPoints()} puntos`);
// console.log(`  - Tiene alguna visible ${player2.someCardVisible()} y su mano es:`);
// player2.printHand();

// console.log(`${player1.getPlayer()}  tiene ${player1.getTotalPoints()}`);
// console.log(`${player2.getPlayer()}  tiene ${player2.getTotalPoints()}`);
// console.log(`Ha ganado ${whoWin(arrayPlayer)}`);
