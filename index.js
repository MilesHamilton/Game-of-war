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
    this.warCards1 = []
    this.warCards2 = []
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
      this.player2Deck.push(this.pack[this.pack.length - i - 1])


    }
    return this.player1Deck, this.player2Deck
  }

  // a function that takes a cards from a deck array and returns them
  showCardsDeck1() {
    this.tableCards1 = []
    this.tableCards1.push(this.player1Deck.pop())
    console.log(this.tableCards1)
    return this.tableCards1
  }

  showCardsDeck2() {
    this.tableCards2 = []
    this.tableCards2.push(this.player2Deck.pop()) // need to confirm that this is functioning properly (spoiler: it is)
    console.log(this.tableCards2)
    return this.tableCards2
  }

  war() { //game of war minigame
    this.warCards1 = []
    this.warCards2 = []
    this.warCards1.push(this.player1Deck.pop())
    this.warCards1.push(this.player1Deck.pop())
    this.warCards2.push(this.player2Deck.pop())
    this.warCards2.push(this.player2Deck.pop())
    if (this.warCards1[1].score > this.warCards2[1].score) {
      this.player1Deck.unshift(this.warCards1[0], this.warCards2[0], this.tableCards1[0], this.tableCards2[0])
      console.log(`player one dominates! ${this.player1Deck.length} cards left`)
      console.log(`player two has ${this.player2Deck.length} cards left`)
      console.log(this.player1Deck)
      this.game()
    } else if (this.warCards2[1].score < this.warCards1[1].score) {
      this.player2Deck.unshift(this.warCards1[0], this.warCards2[0], this.tableCards1[0], this.tableCards2[0])
      console.log(`player two dominates! ${this.player2Deck.length} cards left`)
      console.log(`player one has! ${this.player1Deck.length} cards left`)
      console.log(this.player2Deck)
      this.game()
    } else if (this.warCards1[1].score === this.warCards2[1].score) {
      this.war()


    }
  }


  // to do list:add game of war function 
  //            make the while loop work
  //            show turns 
  //            

  game() {
    for (let i = 3; i < this.player1Deck.length, this.player2Deck.length; i++) {
      // this.showCardsDeck1()[0]
      // this.showCardsDeck2()[0]
      console.log(this.showCardsDeck1()[0].rank, this.showCardsDeck2()[0].rank)
      
      if (this.tableCards1[0].score > this.tableCards2[0].score) {  // somehow this win condition makes player 2 toss 2 cards
        
        this.player2Deck.unshift(this.tableCards2[0], this.tableCards1[0])  
        console.log(this.player1Deck)
        console.log(this.player2Deck)
        console.log(this.tableCards1, this.tableCards2)
        console.log(`player one wins this bout!  ${this.player1Deck.length} cards left`)
        console.log(`player two has ${this.player2Deck.length} cards left`)
      } else if (this.tableCards1[0].score < this.tableCards2[0].score) {
        
        this.player2Deck.unshift(this.tableCards2.shift(), this.tableCards1.shift()) 
        console.log(this.tableCards1, this.tableCards2)
        console.log(`player two wins this bout! ${this.player2Deck.length} cards left`)
        console.log(`player one has ${this.player1Deck.length} cards left`)
        console.log(this.player1Deck)
        console.log(this.player2Deck)
      } else if (this.tableCards1[0].score === this.tableCards2[0].score) {
        console.log("W A R")
        this.war()

      } else if (this.player2Deck[0].score < 3) {
        console.log("player 1 WINS!")
        break
      } else if (this.player1Deck[0].score < 3) {
        console.log("player 2 WINS!")
        break
      }


    }
  }
}



let deck = new Deck()
deck.createPack(suits, ranks, score);
deck.shuffle()
// deck.splitPack()
console.log(deck.splitPack())
// deck.showCardsDeck1() //these are able to call themselves? 
// deck.showCardsDeck2()
// console.log(deck.showCardsDeck1())
// console.log(deck.showCardsDeck2())
deck.game()
// deck.war()