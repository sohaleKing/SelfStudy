const express = require("express")

const app = express()

app.use(express.static("public"))

app.get("/taco", (req, res) => {
    res.send("hello from taco")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})
