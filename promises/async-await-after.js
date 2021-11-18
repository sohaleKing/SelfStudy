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

async function myAsyncFunction() {
    console.log("A")

    const myPromise = new Promise(executor)

    console.log("C")

    try {
        const result = await myPromise
        console.log("F " + result)
    } catch (error) {
        console.log(error)
    }
}

myAsyncFunction()

console.log("D")
