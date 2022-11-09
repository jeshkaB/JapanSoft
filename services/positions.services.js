const {Position} = require("../dataBase");

module.exports = {
    getAllPositions() {
        return Position.find()
    },

    getPositionById(userId) {
        return Position.findOne({_id: userId})
    },

    createPosition(newPosition) {
        return Position.create(newPosition)
    },

    updatePositionById(userId, updatePosition) {
        return Position.updateOne({_id: userId}, updatePosition, {new: true})
    },

    deletePositionById(userId) {
        return Position.deleteOne({_id: userId})
    }
}
