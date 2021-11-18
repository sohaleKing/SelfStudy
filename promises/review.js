// callback syntax
webWorker.doWork((result) => {
    processResult(result)
})

// promises syntax
webWorker.doWork.then((result) => {
    processResult(result)
})

// promises syntax (same as above)
webWorker.doWork.then((result) => processResult(result))

// promises syntax (same as above)
webWorker.doWork.then(processResult)

const DO_NOT_RUN = true

function executor(resolve, reject) {
    if (DO_NOT_RUN) {
        reject("'DO_NOT_RUN' flag is set")
        resolve("go back to happy")
        return
    }

    setTimeout(() => {
        resolve("hello")
    }, 3000)
}

const myPromise = new Promise(executor)

myPromise
    .then((data) => console.log("A " + data))
    .catch((error) => console.log("error", error))
