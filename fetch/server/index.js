const express = require("express")
const jsdom = require("jsdom")
const { JSDOM } = jsdom

const app = express()

app.use(express.static("public"))

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
