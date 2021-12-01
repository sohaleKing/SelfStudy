fetch("http://c936-45-45-65-243.ngrok.io", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Soheyl" }),
})
    .then((res) => {
        return res.text()
    })
    .then((data) => {
        console.log(data)
    })

fetch("http://c936-45-45-65-243.ngrok.io", {
    method: "GET",
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("other message", data)
    })
