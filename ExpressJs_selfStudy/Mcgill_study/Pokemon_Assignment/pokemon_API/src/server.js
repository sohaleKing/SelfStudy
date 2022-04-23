const express = require("express")

const bodyParser = require("body-parser")

const app = express()

const PORT = 3000

app.use(bodyParser.json())

app.use("/pokemon", require("./controllers/pokemon.controller"))
app.use("/trainer", require("./controllers/trainer.controller"))

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
