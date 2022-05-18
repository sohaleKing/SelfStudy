const capturedPokemon = require("../assets/state").capturedPokemon

const router = require("express").Router()
module.exports = router

router.use(
    "/:pokemonNameOrId",
    require("../middleware/findPokemon.middleware").findPokemonMiddleware
)

router.get("/:pokemonNameOrId/capture", capturePokemonByNameOrId)

function capturePokemonByNameOrId(req, res) {
    const pokemon = res.locals

    capturedPokemon.push({
        ...pokemon,
    })
    res.json(capturedPokemon)
}
