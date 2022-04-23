const pokemon = require("../assets/data/state").pokemon

const router = require("express").Router()
module.exports = router

router.use(
    "/:pokemonNameOrId",
    require("../middlewares/pokemon.middleware").findPokemonMiddleware
)

router.get("/", getAllPokemon)
router.get("/:pokemonNameOrId", getPokemonByNameOrId)
router.delete("/:pokemonNameOrId", deletePokemonByNameOrId)
router.put("/:pokemonNameOrId/addPower/:powerName", addspecialPowerToPokemon)

function getAllPokemon(req, res) {
    res.json(pokemon)
}

function getPokemonByNameOrId(req, res) {
    res.json(res.locals.pokemon)
}

function deletePokemonByNameOrId(req, res) {
    const index = pokemon.findIndex(function (el) {
        return el === res.locals.pokemon
    })
    const deletedPokemon = pokemon.splice(index, 1)[0]
    res.json({ deleted: true, pokemon: deletedPokemon })
}

function addspecialPowerToPokemon(req, res) {
    const { pokemon } = res.locals
    pokemon.special = req.params.powerName
    res.json(pokemon)
}
