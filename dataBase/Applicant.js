const {Schema, model} = require('mongoose');

const applicantSchema = new Schema({
    email: {type: String, required: true},
    categories: {type: [String], required: true},
    level: {type: String, required: true},
    japaneseKnowledge: {type: Boolean, required: true}

})

module.exports = model('applicant', applicantSchema);
