// a callback is a function that was pass to another function (higher order function)

console.log("A")

function executor(resolve, reject) {
    console.log("C")

    setTimeout(() => {
        console.log("G")

        // If it's Sunday, then resolve, otherwise reject
        if (new Date().getDay() === 0) {
            resolve("Hi") // queue up a message into the queue
        } else {
            reject("Bye")
        }

        // calling resolve or reject a 2nd time does nothing because the promise is now settled (locked in)
        // resolve("Hi2") // queue up a message into the queue
        // reject("Bye")

        console.log("H")

        // GEC is popped off call stack (call stack is now clear)
    }, 1500)

    console.log("D")
}

console.log("B")

const myPromise = new Promise(executor)

console.log("E", myPromise)

function resolve(value) {
    console.log(`Promise is resolved to: ${value}`, myPromise)
}

function reject(errorMessage) {
    console.log(`Promise is rejected: ${errorMessage}`)
}

myPromise.then(resolve, reject)
// alternatively,
// myPromise.then(resolve)
// myPromise.then(resolve).catch((errorMessage) => {
//     console.log(`Promise2 is rejected: ${errorMessage}`)
// })

console.log("F")
