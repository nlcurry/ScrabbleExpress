var massive = require("massive")
var connectionString = "postgres://localhost/scrabble_express"

var db = massive.connectSync({connectionString : connectionString})

db.setup.schema([], function(err,res){
  if (err) {
    throw(new Error(err.message))
  }

  console.log("yay schema!")
  process.exit()
})
