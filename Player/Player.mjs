import Hand from '../HandsCards/Hand.mjs';

class player {
    constructor (name, isTheBank) {
        this._name = name;
        this._hand = new Hand();
        this._isTheBank = isTheBank;
    }
    getPlayer() { return this._name;}
    getHand() { return this._hand}
    addCard(card) { this._hand.addCard(card);}
    getTotalPoints() {return this._hand.getTotalPoints();}
    printHand() { this._hand.printHand();}
    someCardVisible() {return this._hand.someCardVisible()}
    isTheBank() { return this._isTheBank;}
    setIsTheBank(value) { this._isTheBank = value;}
}
export default player;
// export {addCard} from Hand;clear




