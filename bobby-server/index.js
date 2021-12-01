const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

app.post("/", (req, res) => {
    console.log(req.body)
    setTimeout(() => {
        res.end("this message from taco")
    }, 5000)
})

app.get("/", (req, res) => {
    setTimeout(() => {
        res.json({ name: "taco", age: 15 })
    }, 3000)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})
