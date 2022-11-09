const {positionsService} = require("../services");

module.exports = {
    getAllPositions: async (req, res, next) => {
        try {
            const positions = await positionsService.getAllPositions();

            res.json(positions)
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

            res.json(position)
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
