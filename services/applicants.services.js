const {Applicant} = require("../dataBase");


module.exports = {
    createApplicant(newApplicant) {
        return Applicant.create(newApplicant)
    },

    updateApplicantById(userId, updateApplicant) {
        return Applicant.updateOne({_id: userId}, updateApplicant, {new: true})
    },

    deleteApplicantById(userId) {
        return Applicant.deleteOne({_id: userId})
    },

    getApplicants() {
        return Applicant.find()
    },
}
