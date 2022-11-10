const {positionsService, applicantsService} = require("../services");
module.exports = {

    createApplicant: async (req, res, next) => {
        try {
            const applicant = await applicantsService.createApplicant(req.body);

            res.status(201).json(applicant._id)

        } catch (e) {
            next(e)
        }
    },

    updateApplicantById: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const applicant = await applicantsService.updateApplicantById(userId, req.body);

            res.json()

        } catch (e) {
            next(e)
        }
    },

    deleteApplicantById: async (req, res, next) => {
        try {
            const {userId} = req.params;

            await applicantsService.deleteApplicantById(userId);

            res.sendStatus(204)
        } catch (e) {
            next(e)
        }
    },
    getApplicants: async (req, res, next) => {
        try {
            const appl = await applicantsService.getApplicants();

            res.json(appl)

        } catch (e) {
            next(e)
        }
    },
}
