const pokemon = require("./state").pokemon

const router = require("express").Router()
module.exports = router

router.use("/:pokemonNameOrId", require("./middlewares").pokemonMiddleware)

router.get("/", getAllPokemon)
router.get("/:pokemonNameOrId", getPokemonByNameOrId)

router.delete("/:pokemonNameOrId", deletePokemonByNameOrId)

router.get("/:pokemonName/image", getPokemonImageByName)
router.get("/image", getPokemonImageWithQP)
router.get("/original-list", getPokemonOriginalList)

function getAllPokemon(req, res) {
    res.json(pokemon)
}

function getPokemonByNameOrId(req, res) {
    // console.log("smokey", req.params)

    // const id = Number(req.params.id)

    // const foundPokemon = pokemon.find(function (el) {
    //     return el.id === id
    // })

    // console.log("taco", foundPokemon)

    res.json(res.locals.pokemon)
}

function deletePokemonByNameOrId(req, res) {
    // Made obsolete by our middleware
    // const id = Number(req.params.id)
    // const index = pokemon.findIndex(function (el) {
    //     return el.id === id
    // })

    // console.log(index)

    // if (index < 0) {
    //     res.status(404).end()
    //     return
    // }

    const index = pokemon.findIndex(function (el) {
        return el === res.locals.pokemon
    })

    const deletedPokemon = pokemon.splice(index, 1)[0]

    res.json({ deleted: true, pokemon: deletedPokemon })
}

function getPokemonImageByName(req, res) {
    // const pokemonName = req.params.pokemonName
    const { pokemonName } = req.params // a little "cleaner" to use destructuring

    console.log(pokemonName)

    //http://2832-45-45-65-243.ngrok.io/pokemon/pikachu/image
    // res.sendFile(__dirname + "/images/" + pokemonName + ".jpg")
    res.sendFile(`${__dirname}/images/${pokemonName}.jpg`)
}

function getPokemonImageWithQP(req, res) {
    // const queryParams = req.query
    // console.log(queryParams)

    // Using destructuring with symbol renaming (property: new-name)
    const { name: pokemonName } = req.query

    res.sendFile(`${__dirname}/images/${pokemonName}.jpg`)
}

function getPokemonOriginalList(req, res) {
    // console.log(req.rawHeaders) // This are the http headers that the client sends to the server
    res.sendFile(__dirname + "/pokemon.json")
}

// Garbage area
// This one demos how to use the request body, pass an array of ids to the server, and delete many pokemon

// We brought in this middleware specifically for the handler below
// app.use(bodyParser.json())

// app.delete("/pokemon", (req, res) => {
//     const ids = req.body

//     console.log("TAOCOOOOO,", ids)
//     if (!ids || typeof ids !== "object" || !ids.length) {
//         res.status(400).end()
//         return
//     }

//     ids.forEach((id) => {
//         const index = pokemon.findIndex(function (el) {
//             return el.id === id
//         })

//         if (index < 0) {
//             return
//         }

//         pokemon.splice(index, 1)
//     })

//     res.end()
// })
