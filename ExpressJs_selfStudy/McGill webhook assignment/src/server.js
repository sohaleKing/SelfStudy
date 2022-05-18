const express = require("express")
const webhookServer = express()
const appServer = express()
const bodyParser = require("body-parser")
const axios = require("axios").default

const PORT = {
    app: process.env.NODE_ENV === "develop" ? 2000 : 4000,
    webhook: process.env.NODE_ENV === "develop" ? 3000 : 5000,
}

// subscriber app server
appServer.use(bodyParser.json())
appServer.post("/notify", (req, res) => {
    console.log(req.rawHeaders)
    res.send("someone registered for webhook! check the console")
})


appServer.listen(PORT.app, () => {
    console.log(`subscriber app running on https://localhost:${PORT.app}`)
})

//webhook Server - will inform the app server when a new pokemon captured
webhookServer.use(bodyParser.json())
webhookServer.use("/pokemon",require("./controllers/capturedPokemon.controller"))
webhookServer.use("/webhook", require("./controllers/subscription.controller"))

webhookServer.listen(PORT.webhook, () => {
    console.log(`pokemon webhook running on https://localhost:${PORT.webhook}`)
})
