var express = require('express');
var router = express.Router();
var Player = require('../lib/player.js')
var Scrabble = require('../lib/scrabble.js')
var Score = require('../controllers/score')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scrabble EXPRESS!' });
});
var scrabble = new Scrabble ()

router.get('/scrabble/chart', function(req,res) {
  res.render('chart', {scrabble: scrabble._score})
});

router.get('/scrabble/score', Score.getWord);
router.post('/scrabble/score', Score.getScore);

module.exports = router;
