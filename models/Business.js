var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BusinessSchema = new Schema({
    name: String, 
    image: String,
    address: String,
    story: String,
    deals: String,
});

module.exports = mongoose.model('Business', BusinessSchema);
