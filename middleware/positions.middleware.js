const {availableBodyValues} = require("../constants");
const {ApiError} = require("../errors");

module.exports = {
    checkIsPositionBodyValid: async (req, res, next) => {
        try {
            const {category, level, japaneseRequired} = req.body;

            if (!availableBodyValues.CATEGORIES.includes(category)) {
                throw new ApiError('Wrong category', 400)
            }
            if (!availableBodyValues.LEVELS.includes(level)) {
                throw new ApiError('Wrong level', 400)
            }
            if (!availableBodyValues.JAPANESEREQUIRED.includes(japaneseRequired)) {
                throw new ApiError('Wrong japaneseRequired', 400)
            }
            next();

        } catch (e) {

            next(e)
        }
    }
}
// : {type: String, required: true},
// level: {type: String, required: true},
// company: {type: String, required: true},
// description: {type: String},
// japaneseRequired: {type: Boolean, required: true}
