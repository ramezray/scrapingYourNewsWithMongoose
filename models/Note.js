//get mongoose to use
const mongoose = require("mongoose");
//store mongoose's schema in Schema veriable
var Schema = mongoose.Schema;
//create new schema for articles
var NoteSchema = new Schema({
    //first col title
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

//will use ArticleSchema modle to create Atrical model
var Note = mongoose.model("Note", NoteSchema);
//export our modle
module.exports = Note