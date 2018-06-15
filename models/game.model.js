const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let GameSchema = new Schema ({
    players: [{
        type: String
    }],
    scores: [[
        {
            type: Number,
            default: 0
        }
    ]]
});

module.exports = mongoose.model("Game", GameSchema);