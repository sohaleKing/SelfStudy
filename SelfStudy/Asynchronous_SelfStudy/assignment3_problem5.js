const fetch = require("node-fetch")
fetch("https://api.thedogapi.com/v1/images/search")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
