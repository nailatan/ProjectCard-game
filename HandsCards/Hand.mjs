import Card from "../Cards/Cards.js";

function addCard(card) {
  this._handOfCards.push(card);
  this._totalPoints += card.getValue();
};

class Hand {
  constructor() {
    this._handOfCards = [];    
    this._totalPoints = 0;
  }
  addCard(card) {  this._handOfCards.push(card); this._totalPoints += card.getValue();}
  getHand() { return this._handOfCards};
  getTotalPoints() { return this._totalPoints;}
  someCardVisible() {return this.getHand().some((card)=> card.isVisible())}
  printHand() { this._handOfCards.map((value) =>     
    value.print(),
  );}
}
 export default Hand;