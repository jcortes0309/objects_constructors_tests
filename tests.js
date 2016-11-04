describe('Card', function () {

  it('should instantiate a card with a point and a suit', function() {
    var card = new Card(5, 'diamonds');
    expect(card.point).toEqual(5);
    expect(card.suit).toEqual('diamonds');
  });

  it('image URL works for 2-10', function() {
    var card = new Card(2, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/2_of_diamonds.png');
    card = new Card(3, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/3_of_diamonds.png');
    card = new Card(4, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/4_of_diamonds.png');
    card = new Card(5, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/5_of_diamonds.png');
    card = new Card(6, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/6_of_diamonds.png');
    card = new Card(7, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/7_of_diamonds.png');
    card = new Card(8, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/8_of_diamonds.png');
    card = new Card(9, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/9_of_diamonds.png');
    card = new Card(10, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/10_of_diamonds.png');
  });

  it('image URL works for jack, queen, king and ace', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(12, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/queen_of_diamonds.png');
    card = new Card(13, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/king_of_diamonds.png');
    card = new Card(1, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/ace_of_diamonds.png');
  });

  it('image URL works for different suits', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(11, 'clubs');
    expect(card.getImageUrl()).toEqual('images/jack_of_clubs.png');
    card = new Card(11, 'spades');
    expect(card.getImageUrl()).toEqual('images/jack_of_spades.png');
    card = new Card(11, 'hearts');
    expect(card.getImageUrl()).toEqual('images/jack_of_hearts.png');
  });

});


describe('Hand', function () {

  it('should instantiate an empty hand', function () {
    var myHand = new Hand();
    expect(myHand.getPoints()).toEqual(0);
  });

  // Rob's example
  // it('should add new card of diamonds suit to myHand', function () {
  //   var myHand = new Hand();
  //   myHand.addCard(5, 'diamonds');
  //   expect(myHand.cardArray[0].suit).toEqual('diamonds');
  // });

  it('should add a new diamonds suit card to myHand', function () {
    var myHand = new Hand();
    myHand.addCard(new Card(5, 'diamonds'));
    expect(myHand.cardArray[0].suit).toEqual('diamonds');
  });

  it('should add two new cards to myHand of diamonds and spades suits', function () {
    var myHand = new Hand();
    myHand.addCard(new Card(5, 'diamonds'));
    expect(myHand.cardArray[0].suit).toEqual('diamonds');
    myHand.addCard(new Card(13, 'spades'));
    expect(myHand.cardArray[1].suit).toEqual('spades');
  });

  it('should return the points of one card', function () {
    var myHand = new Hand();
    myHand.addCard(new Card(5, 'diamonds'));
    expect(myHand.getPoints()).toEqual(5);
  });

  it('should return the points of two cards', function () {
    var myHand = new Hand();
    myHand.addCard(new Card(5, 'diamonds'));
    myHand.addCard(new Card(5, 'spades'));
    expect(myHand.getPoints()).toEqual(10);
  });

  it('should return the points of three cards', function () {
    var myHand = new Hand();
    myHand.addCard(new Card(1, 'diamonds'));
    myHand.addCard(new Card(5, 'spades'));
    myHand.addCard(new Card(13, 'spades'));
    expect(myHand.getPoints()).toEqual(16);
  });

});


describe('Deck', function () {

  it('should instantiate a new Deck', function () {
    var deck = new Deck();
    // myDeck.length should be a method call to see how many cards are left
    expect(deck.numOfCards()).toEqual(52);
  });

  it('card count decreased', function () {
    var deck = new Deck();
    deck.draw();
    expect(deck.numOfCards()).toEqual(51);
  });


  it('returs cards in order', function () {
    var deck = new Deck();
    for (var i = 13; i >= 1; i--) {
      expect(deck.draw()).toEqual(new Card(i, 'spades'));
      expect(deck.draw()).toEqual(new Card(i, 'hearts'));
      expect(deck.draw()).toEqual(new Card(i, 'clubs'));
      expect(deck.draw()).toEqual(new Card(i, 'diamonds'));
    }
  });

  it('shuffles the deck', function () {
    var deck = new Deck();
    var card1 = deck.getCard(1);
    var card2 = deck.getCard(2);
    deck.shuffle();
    var card1After = deck.getCard(1);
    var card2After = deck.getCard(2);
    var card1Moved = card1 !== card1After;
    var card2Moved = card2 !== card2After;
    expect(card1Moved || card2Moved).toEqual(true);
  });

  // it('has all the cards', function () {
  //   var deck = new Deck();
  //   // myDeck.length should be a method call to see how many cards are left
  //   expect(deck.numOfCards()).toEqual(52);
  //   // myDeck.map should be a method call to see what cards we have
  //   var stringRepresentation = myDeck.map(function(card) {
  //     return card.point + ' of ' + card.suit;
  //   }).join(',');
  //   expect(stringRepresentation).toEqual('1 of spades,1 of hearts,1 of clubs,1 of diamonds,2 of spades,2 of hearts,2 of clubs,2 of diamonds,3 of spades,3 of hearts,3 of clubs,3 of diamonds,4 of spades,4 of hearts,4 of clubs,4 of diamonds,5 of spades,5 of hearts,5 of clubs,5 of diamonds,6 of spades,6 of hearts,6 of clubs,6 of diamonds,7 of spades,7 of hearts,7 of clubs,7 of diamonds,8 of spades,8 of hearts,8 of clubs,8 of diamonds,9 of spades,9 of hearts,9 of clubs,9 of diamonds,10 of spades,10 of hearts,10 of clubs,10 of diamonds,11 of spades,11 of hearts,11 of clubs,11 of diamonds,12 of spades,12 of hearts,12 of clubs,12 of diamonds,13 of spades,13 of hearts,13 of clubs,13 of diamonds');
  // });

  // it('returns the number of cards left in the deck', function () {
  //   var myDeck = new Deck();
  //
  // });



});
