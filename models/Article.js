//get mongoose to use
const mongoose = require("mongoose");
//store mongoose's schema in Schema veriable
var Schema = mongoose.Schema;
//create new schema for articles
var ArticleSchema = new Schema({
    //first col title
    title: {
        type: String,
        required: true
    },
    //second col the link
    link: {
        type: String,
        required: true
    },
    //third col note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

//will use ArticleSchema modle to create Atrical model
var Article = mongoose.model("Article", ArticleSchema);
//export our modle
module.exports = Article