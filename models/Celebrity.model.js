//  Add your code here
const {schema, model} =require("Mongoose");

const CelebritySchema = new schema({
    name: String,
    occupation: String,
    catchPhrase: String,
});

//exports the model in here
module.exports = model ("Celebrity", CelebritySchema);

