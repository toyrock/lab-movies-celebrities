//  Add your code here

const mongoose = require('mongoose')

const CelebritySchema = mongoose.Schema({
   /*  name:{
        type:String,
        required: true,
    } */
    name: String,
    occupation: String,
    catchPhrase: String,    
});




//exports the model in here!
module.exports = mongoose.model ("Celebrity", CelebritySchema);

