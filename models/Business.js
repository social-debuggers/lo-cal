var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BusinessSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Business', BusinessSchema);
