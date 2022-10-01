const express = require("express")
const app = express()
const PORT = {
    host: 8080,
    db: 3306,
}
const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "LoveGod2021*",
    database: "bdermaplus",
    port: PORT.db,
})
connection.connect(function (err) {
    if (err) {
        return console.error("error: " + err.message)
    }

    connection.query("SELECT * FROM customer", function (err, result) {
        if (err) {
            return console.error("error: " + err.message)
        }
        console.log(result)
    })
})

// connection.end()
app.get("/", (req, res) => {
    res.json({ message: "hi" })
})

app.listen(PORT.host, () => {
    console.log("listening on PORT " + PORT.host)
})
