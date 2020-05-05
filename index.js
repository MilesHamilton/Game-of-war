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
      this.player2Deck.push(this.pack[this.pack.length  - i -1])


    }
    return this.player1Deck, this.player2Deck
  }

  // a function that takes a cards from a deck array and returns them
  showCardsDeck1() {
    this.tableCards1 = []
    this.tableCards1.push(this.player1Deck.pop())
   return this.tableCards1
  }

  showCardsDeck2() { 
    this.tableCards2 = []
    this.tableCards2.push(this.player2Deck.pop())
    return this.tableCards2
  }




game () {
  console.log(this.player1Deck)
  this.showCardsDeck1()
  this.showCardsDeck2()
  console.log(this.showCardsDeck1()[0].rank, this.showCardsDeck2()[0].rank)
console.log(this.tableCards1, this.tableCards2)

  if ( this.tableCards1[0].score > this.tableCards2[0].score) {
    this.player1Deck.unshift(this.tableCards2, this.tableCards1)
    console.log(`player one has ${this.player1Deck.length} cards left` )
    console.log(`player two has ${this.player2Deck.length} cards left` )
    
  } else if ( this.tableCards1[0].score < this.tableCards2[0].score) {
    this.player2Deck.unshift(this.tableCards2, this.tableCards1)
    console.log(`player one has ${this.player1Deck.length} cards left` )
    console.log(`player two has ${this.player2Deck.length} cards left` )
}
}
}

 
let deck = new Deck()
deck.createPack(suits, ranks, score);
deck.shuffle()
// deck.splitPack()
console.log(deck.splitPack())
deck.showCardsDeck1()
deck.showCardsDeck2()
console.log(deck.showCardsDeck1())
console.log(deck.showCardsDeck2())
deck.game()
// deck.war()