const {Schema, model} = require("mongoose");
//iteration 5 same like celebrity.model.js
const MovieSchema = new Schema ({
    title: String,
    genre: String,
    plot: String,
    cast: {
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
    },
});

module.exports = model ("movie", MovieSchema);

