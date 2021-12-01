const p1 = fetch("http://c936-45-45-65-243.ngrok.io", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Bobby" }),
    // body: '{ "name": "Bobby" }',
})
    .then((response) => {
        console.log("response", response)
        return response.text()
    })
    .then((data) => {
        console.log("message from server", data)
        return data
    })

const p2 = fetch("http://c936-45-45-65-243.ngrok.io", {
    method: "GET",
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("other message", data)
        return data
    })

const arrayOfPromises = [p1, p2]

Promise.all(arrayOfPromises).then((result) => {
    console.log("result", result)
})
