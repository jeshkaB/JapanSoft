const {Schema, model} = require('mongoose');

const applicationSchema = new Schema({
    email: {type: String, required: true},
    categories: {type: Array, required: true},
    level: {type: String, required: true},

})

module.exports = model('application', applicationSchema);
