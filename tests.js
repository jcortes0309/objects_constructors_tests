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
  //   expect(myHand.handArray[0].suit).toEqual('diamonds');
  // });

  // My example
  it('should add a new diamonds suit card to myHand', function () {
    var myHand = new Hand();
    myHand.addCard(new Card(5, 'diamonds'));
    expect(myHand.handArray[0].suit).toEqual('diamonds');
  });

  it('should add two new cards to myHand of diamonds and spades suits', function () {
    var myHand = new Hand();
    myHand.addCard(new Card(5, 'diamonds'));
    expect(myHand.handArray[0].suit).toEqual('diamonds');
    myHand.addCard(new Card(13, 'spades'));
    expect(myHand.handArray[1].suit).toEqual('spades');
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
