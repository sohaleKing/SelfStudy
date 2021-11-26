// a callback is a function that we pass to another function
// resolve and reject are functions
console.log("A")

function executor(resolve, reject) {
    console.log("C")

    setTimeout(() => {
        console.log("G")
        // resolve("Buy")
        reject("Buy")
    }, 500)

    console.log("D")
}

console.log("B")

const myPromise = new Promise(executor)

console.log("E")

function solve(value) {
    // console.log("H")
    console.log(`Promise is resolved to: ${value}`)
}

function rej(errorMessage) {
    // console.log("I")
    console.log(`Promise is rejected: ${errorMessage}`)
}

myPromise.then(solve, rej)

// alternatively
// myPromise.then(solve).catch((errorMessage)=> {
//    console.log(`Promise2 is rejected: ${errorMessage}`)
// })

console.log("F")
