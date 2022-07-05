const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/runsite')); // folder with html css etc.

mongoose.connect('your mongodb', {useNewUrlParser: true}, {useUnifiedTopology: true});

const gameDataSchema = {
    nameid: String,
    score: String,
}

const gameData = mongoose.model("Game_Data", gameDataSchema);

app.post("/", function(req, res) {
    let newGameData = new gameData ({
        nameid: req.body.nameid,
        score: req.body.scores,
    });
    newGameData.save();
    res.redirect('/')
})

app.listen(3000, function() {
    console.log("Server is running on 3000")
})
