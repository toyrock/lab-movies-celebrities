const mongoose = require("mongoose");
//iteration 5 same like celebrity.model.js
const movieSchema = mongoose.Schema ({
    title: String,
    genre: String,
    plot: String,
    cast: [
        {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Celebrity", //to find out which collection ObjectId. its celebrity:)
         }
    ],
});

module.exports = mongoose.model ("Movie", movieSchema);

