// variables of the arrays you will be using to create the deck
let suits = ['hearts', 'spades', 'clubs', 'diamonds']
let ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']
let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// a card class that house's the properties suit, rank, and score
class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

// create a Deck class with the properties deck, cards, and draw. 
class Deck {
  constructor() {
    this.pack = []
    this.player1Deck = []
    this.player2Deck = []
    this.tableCards1 = []
    this.tableCards2 = []
  }

  // deck using a method and nested loops and push into array 
  createPack(suits, ranks, score) {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.pack.push(new Card(suits[i], ranks[j], score[j]))
      }
    }
    return this.pack
  }

  // function that randomizes the array using math.floor/math.random
  shuffle() {
    let counter = this.pack.length
    let temp = this.pack.length
    let i = this.pack.length

    while (counter) {
      i = Math.floor(Math.random() * counter--)
      temp = this.pack[counter];
      this.pack[counter] = this.pack[i];
      this.pack[i] = temp
    }
    return this.pack
  }

  // create a function where the cards are distributed between players

  splitPack() {
    for (let i = 0; i < this.pack.length / 2; i++) {
      this.player1Deck.push(this.pack[i])
      this.player2Deck.push(this.pack[this.pack.length - -1 - i])


    }
    return this.player1Deck, this.player2Deck
  }

  // a function that takes a cards from a deck array and returns them
  showCardsDeck1() {
    
    this.tableCards1.push(this.player1Deck.pop())

    return this.tableCards1
  }

  showCardsDeck2() {
   this.tableCards2.push(this.player2Deck.pop())

    return this.tableCards2
  }



  gameover() {
    console.log("Game Over")
  }


   war () {
     for (let i = 0; i < 3; i++) {
     this.showCardsDeck1()
     this.showCardsDeck2()
     this.turn()
    }
   }

   




  turn() { // starts game
    while (this.player1Deck.length > 0 && this.player2Deck.length > 0) {
      this.showCardsDeck1()
      console.log(this.showCardsDeck1()[0].rank)
      this.showCardsDeck2()
      console.log(this.showCardsDeck2()[0].rank)

      if (this.tableCards1[this.tableCards1.length-1].score === this.tableCards2[this.tableCards2.length-1].score) { // if tie
        console.log("WAR")
        this.war()

      } else if (this.tableCards1[this.tableCards1.length-1].score > this.tableCards2[this.tableCards2.length-1].score) { //if player 1 wins
      

        this.player1Deck.unshift.apply(this.player1Deck, this.tableCards1)
        this.player1Deck.unshift.apply(this.player1Deck, this.tableCards2)
        console.log("player 1 wins! player 1 has", `${this.player1Deck.length}`, "cards remaining")
        console.log("player 2 has", `${this.player2Deck.length}`, "cards remaining")
        this.tableCards1 = []
        this.tableCards2 = []

      } else if (this.tableCards1[this.tableCards1.length-1].score < this.tableCards2[this.tableCards1.length-1].score) { // if player 2 wins

        this.player2Deck.unshift.apply(this.player2Deck, this.tableCards1)
        this.player2Deck.unshift.apply(this.player2Deck, this.tableCards2)
        console.log("player 2 wins! player 2 has", `${this.player2Deck.length}`, "cards remaining")
        console.log("player 1 has", `${this.player1Deck.length}`, "cards remaining")
        this.tableCards1 = []
        this.tableCards2 = []

      } else if ((this.player1Deck.length || this.player2Deck.length) === 0) { //end of game
        this.gameover()
      } else {
        this.turn()
      }
    }
  }

}






let deck = new Deck()
deck.createPack(suits, ranks, score);
deck.shuffle()
deck.splitPack()

console.log(deck.player1Deck[0].score)
console.log(deck.player2Deck.length)
deck.showCardsDeck1()
console.log(deck.showCardsDeck2())
deck.showCardsDeck2()
console.log(deck.showCardsDeck1())
deck.turn()
deck.war()