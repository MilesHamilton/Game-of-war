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
        this.pack.push(new Card([suits[i]], [ranks[j]], [score[j]]))
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



  // a function that takes a cards from a deck array and returns them
  showCardsDeck1() {
    while (this.tableCards1.length < 1) {
       this.tableCards1.push(this.player1Deck.pop())
    }
    return this.tableCards1
  }
  showCardsDeck2() {
    while (this.tableCards2.length < 1) {
      this.tableCards2.push(this.player2Deck.pop())
    }
    return this.tableCards2
  }

  // create a function where the cards are distributed between players

  splitPack() {
    for (let i = 0; i < this.pack.length / 2; i++) {
      this.player1Deck.push(this.pack[i])
      this.player2Deck.push(this.pack[this.pack.length - i - 1])


    }
    return this.player1Deck, this.player2Deck
  }

  gameover () {
    alert("Game Over")
  }




  // starts the game. pushes winnning hands(tablecards) to winners decks(playerdeck)
  turn() { 
      this.showCardsDeck1()
      console.log(this.showCardsDeck1())
      this.showCardsDeck2()
      console.log(this.showCardsDeck2())
    

      if (this.tableCards1 === this.tableCards2) {
        console.log("WAR")
        this.showCardsDeck1()
        this.showCardsDeck2()

      } else if (this.tableCards1 > this.tableCards2) {
        this.shuffle(this.tableCards1.tableCards1)
        this.tableCards1.push(this.player1Deck)
        this.tableCards2.push(this.player1Deck)
        console.log("player 1 wins! player 1 has", `${this.player1Deck.length}`, "cards remaining")

      } else if (this.tableCards1 < this.tableCards2) {
        this.shuffle(this.tableCards1.tableCards2)
        this.tableCards1.push(this.player2Deck)
        this.tableCards2.push(this.player2Deck)
        console.log("player 2 wins! player 2 has", `${this.player2Deck.length}` , "cards remaining")

      } else if (this.player1Deck || this.player2Deck === 0 ) {
        this.gameover()
      } else {
        this.turn()
      }
  }
}



let deck = new Deck()
deck.createPack(suits, ranks, score);
deck.shuffle()
deck.splitPack()
console.log(deck.player1Deck)
console.log(deck.player2Deck)
deck.showCardsDeck1()
// console.log(deck.showCardsDeck2())
deck.showCardsDeck2()
// console.log(deck.showCardsDeck1())

deck.turn()
