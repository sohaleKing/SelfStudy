/* 
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.
*/
const cars = [
    { make: "BMW", model: "X3", year: 2019, imported: true },
    { make: "Toyota", model: "Corola", year: 2008, imported: true },
    {
        make: "Cadillac",
        model: "Escalade",
        year: 2021,
        imported: false,
    },
]

const checkCar = (car) => {
    //callback
    if (car.imported) {
        return "yes"
    }
    return "Not"
}

const isCarImported = (callback) => {
    //outer function
    let selected
    let arr = cars
    for (let i = 0; i < arr.length; i++) {
        selected = arr[i]
        console.log(`the car # ${i} is ${callback(selected)} imported`) //revoked callback here to print!
    }
}

isCarImported(checkCar) //passing the callback as an argumnet to another function
