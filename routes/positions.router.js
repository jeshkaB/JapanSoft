const {Router} = require ('express');

const {positionsController} = require("../controllers");
const {positionMiddleware} = require("../middleware");


const positionsRouter = Router();

positionsRouter.get('/', positionsController.getAllPositions);

positionsRouter.post('/', positionMiddleware.checkIsPositionBodyValid, positionsController.createPosition);

positionsRouter.get('/:userID', positionsController.getPositionById);

positionsRouter.delete('/:userID', positionsController.deletePositionById);

positionsRouter.patch('/:userID', positionsController.updatePositionById);

module.exports = positionsRouter
