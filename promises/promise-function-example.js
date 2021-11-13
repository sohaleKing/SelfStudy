const users = [
    { name: "Bobby" },
    { name: "Soheyl" },
    { name: "Claudia" },
    { name: "Mercy" },
    { name: "Akram" },
]

function getUserProfileExists(nameToSearch) {
    if (!nameToSearch) {
        // return Promise.resolve("Missing name to search")
        return Promise.reject("Missing name to search")
        // Line 12 is the exact some thing as the following:
        // return new Promise((_, reject) => {
        //     reject("Missing name to search")
        // })
    }

    const myPromise = new Promise((resolve) => {
        // This is our "fake" request to the server/database
        setTimeout(() => {
            // the callback that goes inside an adv arr method has a special name, it's called a "Predicate"
            resolve(users.some((elem) => elem.name === nameToSearch))
        }, 1000)
    })

    return myPromise
}

getUserProfileExists("")
    .then((value) => {
        console.log("found", value)
    })
    .catch((error) => {
        console.log(error)
    })

// say we implemented a reject on line 10 (in the executor callback)
// we would do it this way
// getUserProfileExists("Claudia").then(
//     (value) => {
//         console.log("found", value)
//     },
//     (error) => {
//         console.log("error", error)
//     }
// )
