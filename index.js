// create variables of the arrays you will be using to create the deck
      let suits = ['hearts','spades', 'clubs', 'diamonds']
      let ranks = ['Ace' , 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']
// create a card class that house's the properties suit, rank, and score
class Card {
  constructor (suit, rank) {
      this.suit = suit
      this.rank = rank
      

      
  }  
}
// create a Deck class with the properties deck, cards, and draw. 

  class Deck {
      constructor () {
          this.pack = []
         

      }

// create deck using a method and nested loops and push into array 
  createPack (suits, ranks) {
     for (let i = 0; i < suits.length; i++) {
          for (let j = 0; j < ranks.length; j++) {
                   this.pack.push(new Card([suits[i]], [ranks[j]]))
      

          }
      }
      return this.pack
  }

  //use a function that randomizes the array using math.floor/math.random
  shuffle () {
    let counter = this.pack.length
    let temp = this.pack.length
    let i = this.pack.length

    while (counter) {
    i = Math.floor(Math.random()* counter--)
    temp = this.pack[counter];
    this.pack[counter] = this.pack[i];
    this.pack[i] = temp
    }
    return this.pack
  }
 


  // Create a function that takes two cards from the deck array and returns them
  draw () {
      let hand = []
      while (hand.length < 2) {
        hand.push(this.pack.pop())
      }
      return hand
  }
  
}



let deck = new Deck()
deck.createPack(suits, ranks);
deck.shuffle()
console.log(deck.draw())

