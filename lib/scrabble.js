var Scrabble = function() {
  this._score = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
  };
};


Scrabble.prototype.score = function(word){
  // The word is input as a string (case insensitive).
  if (word === undefined){
    throw new TypeError("No word was provided");
  } else {
    var word_array = word.toUpperCase().split(""),
        word_score = 0;

    if(word.length <= 7){
      for(var letter of word_array){
        word_score += this._score[letter];
      }

    // seven letter word gets 50point bonus
      if(word.length == 7){
        word_score += 50;
      } else {
        word_score;
      }
    };
    // returns the total score value for the given word.
    return word_score;
  };
}


Scrabble.prototype.highestScoreFrom = function(arrayofWords){
  var win_score = 0,
      win_word = arrayofWords[0];


  for (var word of arrayofWords){
    var score_inst = this.score(word);
    // #checks if current winning score is less than or equal
    // #to the current word's score, then uses the tiebreaker
    // #conditions to determine winning word and score
    if (score_inst > win_score){
      win_score = score_inst;
      win_word = word;
    } else if (score_inst === win_score && word.length < win_word.length){
      win_word = word;
      win_score = score_inst;
    }
  };
  return win_word;
};

module.exports = Scrabble;
