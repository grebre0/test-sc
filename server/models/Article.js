var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    text: String,
    tags: [String]
});

module.exports = mongoose.model('Article', Schema);