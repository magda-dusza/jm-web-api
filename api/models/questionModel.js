var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    question: {
        type: String
    },
    answer :{
        type: String
    },
    category :{
        type: String
    },
    created :{
        type: Date,
    },
});

module.exports = mongoose.model('Question', QuestionSchema);
