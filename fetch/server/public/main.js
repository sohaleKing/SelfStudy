console.log("Hello from main.js")

// this is the bad syntax because
// you chained the promise inside the first .then callback
// fetch("/taco").then((response) => {
//     response.text().then((text) => console.log(text))
// })

// fetch("/taco")
//     .then((response) => {
//         return response.text()
//     })
//     .then((text) => console.log(text))

// this is the good way to chain promises

function makeRequest() {
    const myFetchPromise = fetch("/taco")
        .then((response) => {
            console.log("response", response, typeof response.body)
            const p = response.text() // .text() has to do with with fetch api
            console.log("responsePromise", p)
            return p
        })
        .then((text) => console.log(text))

    console.log("myFetchPromise", myFetchPromise)

    return myFetchPromise
}

makeRequest()

console.log("test")
