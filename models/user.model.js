const mongoose = require("mongoose")

const ScoreSchema = new mongoose.Schema({
    name : String ,
    score : Number
})

const ScoreModel = mongoose.model("Scores",ScoreSchema)
 
module.exports = ScoreModel