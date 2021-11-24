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

const button = document.getElementsByTagName("button")[0]

button.onclick = function () {
    // Show spinner

    fetch("/cat")
        .then((response) => {
            // console.log(response)
            if (!response.ok) {
                return Promise.reject("Server Unavailable")
            }

            return response.text()
        })
        .then((catUrl) => {
            // console.log(catUrl)
            const img = document.createElement("img")
            img.setAttribute("src", catUrl)
            document.body.appendChild(img)
            // Stop showing spinner
        })
        .catch((error) => {
            alert(`Error: ${error}`)
            // Stop showing spinner
        })
        .finally(() => {
            // Stop showing spinner
        })
}

// console.log(button)
