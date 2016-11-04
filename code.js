// Card Constructor
function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

// getImageUrl method
Card.prototype.getImageUrl = function() {
  if (this.point === 11) {
    this.point = 'jack';
  } else if (this.point === 12) {
    this.point = 'queen';
  } else if (this.point === 13) {
    this.point = 'king';
  } else if (this.point === 1) {
    this.point = 'ace';
  }
  return 'images/' + this.point + '_of_' + this.suit + '.png';
};

// Hand Constructor
function Hand() {
  this.handArray = [];
  this.points = 0;
}

// // addCard method
// // Rob's example
// Hand.prototype.addCard = function (point, suit) {
//   var card = new Card(point, suit);
//   return this.handArray.push(card);
// };

// addCard method
Hand.prototype.addCard = function (card) {
  return this.handArray.push(card);
};

Hand.prototype.getPoints = function () {
  var addPoint = 0;
  var pointList = [];

  for (var idxCard in this.handArray) {
    var card = this.handArray[idxCard];
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
