const {positionsService} = require("../services");
const {sendEmail} = require("../services/email.services");

module.exports = {
    getAllPositions: async (req, res, next) => {
        try {
            // if (JSON.stringify(req.query)!=='{}') {
            // const positions = await positionsService.getPositionsByQuery(req.query);
            // res.json(positions)
            // }
            // else {
            const positions = await positionsService.getAllPositions(req.query);
            // const positionsByTag = await positionsService.getPositionsByTag(req.query);
            // positions.push(positionsByTag)
            await sendEmail('varchello@ukr.net');
            res.json(positions)
            // }

        } catch (e) {
            next(e)
        }
    },

    getPositionById: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const position = await positionsService.getPositionById(userId, req.body);

            res.json(position)
        } catch (e) {
            next(e)
        }
    },


    createPosition: async (req, res, next) => {
        try {
            const position = await positionsService.createPosition(req.body);

            res.status(201).json(position._id)

        } catch (e) {
            next(e)
        }
    },

    updatePositionById: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const position = await positionsService.updatePositionById(userId, req.body);

            res.json()

        } catch (e) {
            next(e)
        }
    },

    deletePositionById: async (req, res, next) => {
        try {
            const {userId} = req.params;

            await positionsService.deletePositionById(userId);

            res.sendStatus(204)
        } catch (e) {
            next(e)
        }
    },
}
