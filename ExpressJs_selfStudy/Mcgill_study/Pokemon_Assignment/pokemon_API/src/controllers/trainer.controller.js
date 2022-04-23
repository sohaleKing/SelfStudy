const { findPokemonMiddleware } = require("../middlewares/pokemon.middleware")
const { findTrainerMiddleware } = require("../middlewares/trainer.middleware")

const trainers = require("../assets/data/state").trainers

const router = require("express").Router()
module.exports = router

router.use("/:trainerNameOrId", findTrainerMiddleware)

router.get("/", getAllTrainers)
// With 3 arguments, it means | PATH | MIDDLEWARE (or array of middleware) | HANDLER
router.get("/:trainerNameOrId", findTrainerMiddleware, getTrainerByName)

router.post(
    "/:trainerNameOrId/pokemon/:pokemonNameOrId/capture",
    findPokemonMiddleware,
    capturePokemon
)

router.get(
    "/:trainerNameOrId/more-captured/:trainerNameOrId/compare",
    [findTrainerMiddleware],
    compareTrainers
)

function getAllTrainers(req, res) {
    res.json(trainers)
}

function getTrainerByName(req, res) {
    res.json(res.locals.trainer)
}

function capturePokemon(req, res) {
    const { trainer, pokemon } = res.locals

    const found = trainers.some((trainer) => {
        return trainer.capturedPokemon.some((el) => {
            return (
                el.id === Number(req.params.pokemonNameOrId) ||
                el.name.toLowerCase() ===
                    req.params.pokemonNameOrId.toLowerCase()
            )
        })
    })

    if (!found) {
        trainer.capturedPokemon.push({
            ...pokemon,
            attack: 5,
            defense: 5,
        })
        trainer.captured++
        res.json(trainer)
    } else {
        res.status(409).json({
            message: "pokemon already captured",
        })
    }
}

function compareTrainers(req, res) {
    const { trainer } = res.locals
    console.log(trainer)
    res.send("hi")
}
