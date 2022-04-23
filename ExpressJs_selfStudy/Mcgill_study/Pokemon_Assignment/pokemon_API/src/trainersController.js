const {pokemonMiddleware, trainerMiddleware} = require("./middlewares")

const trainers = require("./state").trainers

const router = require("express").Router()
module.exports = router

router.use("/:trainerNameOrId", trainerMiddleware)

router.get("/", getAllTrainers)
router.get("/:trainerNameOrId", trainerMiddleware, getTrainerByName)

// With 3 arguments, it means | PATH | MIDDLEWARE (or array of middleware) | HANDLER
router.post("/:trainerNameOrId/pokemon/:pokemonNameOrId/capture", pokemonMiddleware, capturePokemon)

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

    console.log("taco", pokemon)

    if (!found) {
        trainer.capturedPokemon.push({
            ...pokemon,
            attack: 3,
            defense: 3,
        })
        res.json(trainer)
    } else {
        res.status(409).json({
            message: "you have already captured the pokemon",
        })
    }
}
