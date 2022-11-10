const {Router} = require ('express');

const {positionsController} = require("../controllers");
const {positionMiddleware} = require("../middleware");


const positionsRouter = Router();

positionsRouter.get('/', positionsController.getAllPositions);

positionsRouter.post('/', positionMiddleware.checkIsPositionBodyValid, positionsController.createPosition);

positionsRouter.get('/:userId', positionsController.getPositionById);

positionsRouter.delete('/:userId', positionsController.deletePositionById);

positionsRouter.patch('/:userId', positionsController.updatePositionById);

module.exports = positionsRouter
