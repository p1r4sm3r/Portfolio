const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect('mongodb+srv://t1les:t1les12345@cluster0.zb7tc7u.mongodb.net/Game_Data', {useNewUrlParser: true}, {useUnifiedTopology: true});

const gameDataSchema = {
    score: String,
}

const gameData = mongoose.model("Game_Data", gameDataSchema)
app.use(express.static("runsite"));

app.post("/", function(req, res) {
    let newGameData = new gameData ({
        score: req.body.highscore,
    });
    newGameData.save();
    res.redirect('/')
})

app.listen(3000, function() {
    console.log("Server is running on 3000")
})