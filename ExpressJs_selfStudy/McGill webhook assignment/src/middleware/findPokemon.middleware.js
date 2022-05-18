const { pokemon } = require("../assets/state")

//Find Pokemon by name/ID
function findPokemonMiddleware(req, res, next) {
    const pokemonNameOrId = req.params.pokemonNameOrId
    const num = Number(pokemonNameOrId)

    let foundPokemon
    if (num) {
        foundPokemon = pokemon.find(function (el) {
            return el.id === num
        })
    } else {
        const pokemonName = pokemonNameOrId
        foundPokemon = pokemon.find(function (el) {
            return el.name.toLowerCase() === pokemonName.toLowerCase()
        })
    }
    if (!foundPokemon) {
        res.status(404).end()
        return
    }

    res.locals.pokemon = foundPokemon
    next()
}

module.exports = {
    findPokemonMiddleware,
}
