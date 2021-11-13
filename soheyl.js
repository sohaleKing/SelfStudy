// Global execution context (GEC) is created
console.log("A")

let name = "Soheyl"
let i = 0
debugger
console.log("Bob" + window.i)

let printName = () => {
    console.log(`C -- printing ${name}'s name for the ${++i} time`)

    // Adds a plate for a microsecond, but it pops off immediately
    setTimeout(printName, 5000) // calls the web-api setTimeout method

    console.log("D")

    return undefined
    // 2nd plate is "popped off" the call stack
}

console.log("B")

printName() // Adds 2nd plate (EC)

console.log("E")

// for (let i = 0; i < 10000000000000; i++) {}

// GEC is popped off

// sometime later

// new GEC is created from event-loop (from the queue)

// this time around, no 2nd plate is added because printName() is not part of this script
