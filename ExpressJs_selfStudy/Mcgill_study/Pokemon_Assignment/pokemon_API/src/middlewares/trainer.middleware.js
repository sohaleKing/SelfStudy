const { trainers } = require("../assets/data/state")

//Find Trainers by name/ID
function findTrainerMiddleware(req, res, next) {
    const trainerNameOrId = req.params.trainerNameOrId

    const num = Number(trainerNameOrId)

    let foundTrainer
    if (num) {
        foundTrainer = trainers.find(function (el) {
            return el.id === num
        })
    } else {
        const trainerName = trainerNameOrId
        foundTrainer = trainers.find(function (el) {
            return el.name.toLowerCase() === trainerName.toLowerCase()
        })
    }

    if (!foundTrainer) {
        res.status(404).end()
        return
    }

    res.locals.trainer = foundTrainer
    next()
}

module.exports = {
    findTrainerMiddleware,
}
