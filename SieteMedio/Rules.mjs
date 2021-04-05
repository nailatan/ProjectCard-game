import Hand from "../HandsCards/Hand.mjs";

export function canContinueGame(hand) {
  return hand.getTotalPoints() <= 7.5;
}

//Tendria que validar que hay uno que juega como la banca, si no fijar uno.
export function validateInitialPlayers(players) {
    let playerBank = players.filter((player) => {player.isTheBank()});
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
