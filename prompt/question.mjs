import { question } from "readline-sync";

export function ask(question1) {
  return question(question1);
}

export function askForPlayer() {
  let name = "";
  let isBank = false;
  name = question("Name player: ");

  let response = question("this player is th bank (S/N)? ");
  isBank = "S" === response;
  return { name: name, isBank: isBank };
}

export function askForNextAction() {
  let action = "C";
  action = question(
    "What dou yo want to do (T -> Take a new card, S --> Stand, V -- View my Hand, P --> View my points)? "
  );
  return action;
}
