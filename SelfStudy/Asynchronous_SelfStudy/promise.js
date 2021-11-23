/*A Promise is a proxy for a value not necessarily known when the promise is created.
so instead of immediately returning the final value, the asynchronous method returns a promise
 to supply the value at some point in the future and handlers with an asynchronous action's
 eventual success value or failure reason */

//Dad promised his son to order pizza if the son is done with his homework
const isDadHappy = true

//pizza promise
const pizza = {
    type: "Pepperoni",
    size: "Medium",
    price: 20,
}

//executer
const orderPizza = (resolve, reject) => {
    //define a setTimeout only to simulate a wait for the fetch responce
    setTimeout(() => {
        if (isDadHappy) {
            resolve(pizza)
        } else {
            const error = "son hasnt finished his homework yet!"
            reject(error)
        }
    }, 1000)
}

//Creating the promise
const dad_Promis = new Promise(orderPizza)

const askToDad = () => {
    dad_Promis
        .then((pizza) => {
            console.log("Wow my pizza is here", pizza)
        })
        .catch((error) => {
            console.log("Error", error)
        })
}

askToDad()
