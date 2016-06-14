var Scrabble = require('../lib/scrabble')
var scrabble = new Scrabble

var ScoreController = {
  getWord: function (req,res) {
    var locals = {}
    locals.title = "Enter a word"
    res.render('score', locals)
  },

  getScore: function (req,res) {
    var locals = {}
    var word = req.body.word || null
    locals.word = word
    locals.title = "Your score for "
    if (word === null) {
      locals.score = 0
    } else {
      locals.score = scrabble.score(word)
    }
    res.render('score', locals)
  }
}

module.exports = ScoreController