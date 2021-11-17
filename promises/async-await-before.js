const DO_NOT_RUN = false

function executor(resolve, reject) {
    console.log("B")

    if (DO_NOT_RUN) {
        reject("DO_NOT_RUN is set")
        return
    }

    setTimeout(() => {
        console.log("E")
        resolve("hello")
    }, 3000)
}

console.log("A")

const myPromise = new Promise(executor)

console.log("C")

myPromise
    .then((data) => console.log("F " + data))
    .catch((error) => console.log("error", error))

console.log("D")
