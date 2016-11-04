// Card Constructor
function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

// getImageUrl method
Card.prototype.getImageUrl = function() {
  var name = this.point;
  if (name === 11) {
    name = 'jack';
  } else if (name === 12) {
    name = 'queen';
  } else if (name === 13) {
    name = 'king';
  } else if (name === 1) {
    name = 'ace';
  }
  return 'images/' + name + '_of_' + this.suit + '.png';
};

// Hand Constructor
function Hand() {
  this.cardArray = [];
  this.points = 0;
}

// // addCard method
// // Rob's example
// Hand.prototype.addCard = function (point, suit) {
//   var card = new Card(point, suit);
//   return this.cardArray.push(card);
// };

// addCard method
Hand.prototype.addCard = function (card) {
  return this.cardArray.push(card);
};

Hand.prototype.getPoints = function () {
  var addPoint = 0;
  var pointList = [];

  for (var idxCard in this.cardArray) {
    var card = this.cardArray[idxCard];
    if (card.point >= 10) {
      addPoint = 10;
    } else if (card.point === 1) {
      if (this.points + 11 > 21) {
        addPoint = card.point;
      } else {
        addPoint = 11;
      }
    } else {
      addPoint = card.point;
    }
    this.points += addPoint;
    pointList.push(addPoint);
  }
  if (this.points > 21){
    for (var idxAddPoint in pointList) {
      if (pointList[idxAddPoint] === 11){
        this.points -= 10;
      }
    }
  }

  return this.points;
};

// Deck Constructor
function Deck() {
  this.cardArray = [];

  for (var i = 1; i <= 13; i++) {
    this.cardArray.push(new Card(i, 'diamonds'));
    this.cardArray.push(new Card(i, 'clubs'));
    this.cardArray.push(new Card(i, 'hearts'));
    this.cardArray.push(new Card(i, 'spades'));
  }
}

Deck.prototype.numOfCards = function () {
  return this.cardArray.length;
};

Deck.prototype.draw = function () {
  return this.cardArray.pop();
};

Deck.prototype.getCard = function (i) {
  return this.cardArray[i - 1];
};

Deck.prototype.shuffle = function () {
  for (var i = 0; i < this.cardArray.length; i++) {
    var rand = Math.floor(Math.random() * this.cardArray.length),
        rand2 = Math.floor(Math.random() * this.cardArray.length),
        temp;
    temp = this.cardArray[rand];
    this.cardArray[rand] = this.cardArray[rand2];
    this.cardArray[rand2] = temp;
  }
};
