// create variables of the arrays you will be using to create the deck
let suits = ['hearts', 'spades', 'clubs', 'diamonds']
let ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']
let score = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let player1Deck = []
let player2Deck = []
let tableCards = []
// create a card class that house's the properties suit, rank, and score
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
  }
 
  // create deck using a method and nested loops and push into array 
  createPack(suits, ranks, score) {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.pack.push(new Card([suits[i]], [ranks[j]], [score[j]]))
      }
    }
    return this.pack
  }

  //use a function that randomizes the array using math.floor/math.random
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



  // Create a function that takes two cards from the deck array and returns them
  showCardsDeck1() {
    while (hand.length < 1) {
      tableCards.push(this.player1Deck.pop())
    }
    return tableCards
  }
  showCardsDeck2() {
    while (hand.length < 1) {
      tableCards.push(this.player2Deck.pop())
    }
    return tableCards
  }

  // create a function where the cards are distributed between players

  splitPack () {
    for (let i = 0; i < this.pack.length / 2; i++) {
      player1Deck.push(this.pack[i])
      player2Deck.push(this.pack[this.pack.length - i - 1])
      
      
    }
    return player1Deck, player2Deck
  }

  Turn () {
      while (this.showCards)
    if(player1Deck || player2Deck === 0) {

    } else if (player1Deck > player2Deck) {
      tableCards.push(player1Deck)
    }else if (player1Deck < player2Deck) {
      tableCards.push(player2Deck)
    }
  }

}


let deck = new Deck()
deck.createPack(suits, ranks, score);
deck.shuffle()
deck.splitPack()
console.log(deck.shuffle())