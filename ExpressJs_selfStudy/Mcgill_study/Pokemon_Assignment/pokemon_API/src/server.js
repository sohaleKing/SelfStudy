const express = require("express")

const bodyParser = require("body-parser")

const app = express()

const PORT = process.env.NODE_ENV === "development" ? 3000 : 5000

app.use(bodyParser.json())

app.use("/pokemon", require("./pokemonController"))
app.use("/trainers", require("./trainersController"))

app.listen(PORT, () => {
    console.log("listening on PORT " + PORT)
})
