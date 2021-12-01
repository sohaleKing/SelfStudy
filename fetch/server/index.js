const express = require("express")
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const cors = require("cors")

const app = express()

app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.get("/cat", (req, res) => {
    const TIMEOUT_MS = 200

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject("timeout expired")
        }, TIMEOUT_MS)
    })

    const promise = JSDOM.fromURL("https://aws.random.cat/").then((dom) => {
        const doc = dom.window.document
        const firstImgTag = doc.documentElement.getElementsByTagName("img")[0]
        const imageUrl = firstImgTag.getAttribute("src")
        return imageUrl
    })

    const arrayOfPromises = [timeoutPromise, promise]

    Promise.race(arrayOfPromises)
        .then((value) => {
            res.end(value)
            res.json({ data: value })
        })
        .catch((error) => {
            res.status(503).end(error)
        })
})

app.get("/taco", (req, res) => {
    res.send("hello from taco")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})
