/* 
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.
*/

const SayHi = function (name) {
    console.log(`Hello ${name}`)
}

//outer function
const getInputName = function (callback) {
    let input = "Soheyl"
    callback(input) //invoked here
}

getInputName(SayHi) //passed as an argument on this function call

//in fact this callback its the refrence to sayHi function
