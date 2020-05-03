// create variables of the arrays you will be using to create the deck
let suits = ['hearts', 'spades', 'clubs', 'diamonds']
let ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']
let score = [1,2,3,4,5,6,7,8,9,10,11,12,13]
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
  createPack(suits, rank, score) {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.pack.push(new Card([suits[i]], [ranks[j]],[score[j]]))
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
  draw() {
    let hand = []
    while (hand.length < 2) {
      hand.push(this.pack.pop())
    }
    return hand
  }

  // create a function where the cards are distributed between players

  splitPack (player1, player2) {
    for (let i = 0; i < .length; i++) {
      const element = array[i];
      
    }
    
  }

  // create a function where the game logs the value of the drawn cards as a score 
  score() {


  }

}



let deck = new Deck()
deck.createPack(suits, ranks, score);
deck.shuffle()
console.log(deck)