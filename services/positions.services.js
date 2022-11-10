
const {Position} = require("../dataBase");

module.exports = {
    getAllPositions(query) {
        const {category, level,tag} = query;
        // return Position.find({category:`${category}`, level:`${level}`, description: `/${tag}/i`}, function (err, docs) {})
        // console.log(Position.find(query));
        // console.log(Position.find({category:`${category}`, level:`${level}`, description: `/${tag}/i`}))
        // console.log(tag)
        // return Position.find({description: `/${tag}/i`})
        // return Position.find({description: /reloc/i})
        return Position.find(query)
    },

    // getPositionsByTag (query) {
    //     const {tag} = query;
    //     return Position.find({description: `/${tag}/i`})
    // },

    // getPositionsByQuery(filter) {
    // // const {category, level, tag} = filter;
    // return Position.find(filter)
    //     // ?category=nodejs&level=middle&tag=relocation
    // },

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
