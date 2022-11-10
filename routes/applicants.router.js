const {Router} = require('express');

const {applicantsController} = require("../controllers");

const applicantsRouter = Router();

applicantsRouter.post('/', applicantsController.createApplicant);

applicantsRouter.put('/:userId', applicantsController.updateApplicantById);

applicantsRouter.delete('/:userId', applicantsController.deleteApplicantById);

applicantsRouter.get('/', applicantsController.getApplicants);

module.exports = applicantsRouter
