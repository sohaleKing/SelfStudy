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

//other features
router.get("/:pokemonName/image", getPokemonImageByName)
router.get("/image", getPokemonImageWithQP)
router.get("/original-list", getPokemonOriginalList)

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

//all other feautures

function getPokemonImageByName(req, res) {
    const { pokemonName } = req.params
    console.log(pokemonName)
    res.sendFile(`${__dirname}/src/assets/images/${pokemonName}.jpg`)
}

function getPokemonImageWithQP(req, res) {
    const { name: pokemonName } = req.query
    res.sendFile(`${__dirname}/src/assets/images/${pokemonName}.jpg`)
}

function getPokemonOriginalList(req, res) {
    res.sendFile(__dirname + "/src/assets/data/pokemon.json")
}
