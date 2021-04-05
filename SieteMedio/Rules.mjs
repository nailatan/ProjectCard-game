import Hand from "../HandsCards/Hand.mjs";
import player from "../Player/Player.mjs";
import { askForNextAction } from "../prompt/question.mjs";

export function canContinueGame(hand) {
  return hand.getTotalPoints() <= 7.5;
}

function executeAction(player, action, deck) {
  if ("T" === action) {
    player.addCard(deck.takeCard());
  } else if ("V" === action) {
    console.log("Tus cartas son: ");
    player.printHand();
  } else if ("P" === action) {
    console.log(`Tus cartas suman: ${player.getTotalPoints()}`);
  }
}

export function playGame(player, deck) {
  if (!player.isTheBank()) {
    console.log(`Turno de ${player.getPlayer()}. Cogiendo primera carta`);
  } else {
    console.log(
      `Turno de la banca (${player.getPlayer()}). Cogiendo primera carta`
    );
  }

  let card = deck.takeCard();
  player.addCard(card);
  player.printHand();
  let nextAction = askForNextAction();
  while (nextAction != "S") {
    executeAction(player, nextAction, deck);
    if (nextAction != "V") player.printHand();
    if (canContinueGame(player.getHand())) {
      nextAction = askForNextAction();
    } else {
      console.log("Te has pasado de 7.5!!!");
      nextAction = "S";
    }
  }
}

export function validateInitialPlayers(players) {
  //Solo puede haber uno que juegue como banca.Si hay mas de uno, dejaremos solo el primero
  if (players.length < 2) return "Se necesitan al menos dos jugadores";

  let playerBank = players.filter((player) => player.isTheBank());
  if (playerBank.length > 1) {
    playerBank.forEach((value, index) => {
      if (index != 0) value.setIsTheBank(false);
    });
    //La banca juega el último
    players.sort((player1, player2) => (player1.isTheBank() ? 1 : -1));
  } else {
    players[players.length - 1].setIsTheBank(true);
  }
  return "";
}

export function whoWin(players) {
  let banca = players.find((player) => player.isTheBank());

  let pointBanca = banca.getTotalPoints();
  players.splice(players.indexOf(banca), 1);

  let wonPlayers = players.every((player) => {
    return (
      (player.getTotalPoints() > pointBanca &&
        player.getTotalPoints() <= 7.5) ||
      pointBanca > 7.5
    );
  });
  if (wonPlayers) return "Players";
  else return "Bank";
}
