const express = require("express")

const bodyParser = require("body-parser")

const app = express()

const PORT = process.env.NODE_ENV === "development" ? 3000 : 5000

const pokemon = require("./pokemon.json")

console.log(typeof pokemon)
console.log(pokemon.length)

// console.log(process.env)

app.use(bodyParser.json())

app.get("/pokemon/all", (req, res) => {
    // console.log(req.rawHeaders) // This are the http headers that the client sends to the server
    res.sendFile(__dirname + "/pokemon.json")
})

app.get("/pokemon", (req, res) => {
    res.json(pokemon)
})

app.get("/pokemon/:id", (req, res) => {
    console.log("smokey", req.params)

    const id = Number(req.params.id)

    const foundPokemon = pokemon.find(function (el) {
        return el.id === id
    })

    console.log("taco", foundPokemon)

    res.json(foundPokemon)
})

app.delete("/pokemon/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = pokemon.findIndex(function (el) {
        return el.id === id
    })

    console.log(index)

    if (index < 0) {
        res.status(404).end()
        return
    }

    const deletedPokemon = pokemon.splice(index, 1)[0]

    res.json({ deleted: true, pokemon: deletedPokemon })
})

app.delete("/pokemon", (req, res) => {
    const ids = req.body

    console.log("TAOCOOOOO,", ids)
    if (!ids || typeof ids !== "object" || !ids.length) {
        res.status(400).end()
        return
    }

    ids.forEach((id) => {
        const index = pokemon.findIndex(function (el) {
            return el.id === id
        })

        if (index < 0) {
            return
        }

        pokemon.splice(index, 1)
    })

    res.end()
})

app.get("/pokemon/:pokemonName/image", (req, res) => {
    // const pokemonName = req.params.pokemonName
    const { pokemonName } = req.params // a little "cleaner" to use destructuring

    console.log(pokemonName)

    //http://2832-45-45-65-243.ngrok.io/pokemon/pikachu/image
    // res.sendFile(__dirname + "/images/" + pokemonName + ".jpg")
    res.sendFile(`${__dirname}/images/${pokemonName}.jpg`)
})

app.get("/pokemon/image", (req, res) => {
    // const queryParams = req.query
    // console.log(queryParams)

    // Using destructuring with symbol renaming (property: new-name)
    const { name: pokemonName } = req.query

    res.sendFile(`${__dirname}/images/${pokemonName}.jpg`)
})

app.listen(PORT, () => {
    console.log("listening on PORT " + PORT)
})
