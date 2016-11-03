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
