const vaccinated = true

const getPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("let the vistor gets in!")
        reject("Not allowed to enter")
    }, 3000)
})

let AddThanks = getPromise
    .then((result) => {
        return `${result} thank you!!`
    })
    .then((result) => {
        console.log(result)
    })

console.log(AddThanks)
