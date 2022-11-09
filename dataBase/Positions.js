const {Schema, model} = require('mongoose');

const positionSchema = new Schema({
    category: {type: String, required: true},
    level: {type: String, required: true},
    company: {type: String, required: true},
    description: {type: String},
    japaneseRequired: {type: Boolean, required: true}
})

module.exports = model('position', positionSchema);
