function makeCounter(initCount) {
    let _count = initCount

    return {
        getCount: () => _count,
        increment: () => ++_count,
    }
}

const counter = makeCounter(5)

console.log("getCount", counter.getCount())
console.log("increment", counter.increment())
console.log("increment", counter.increment())
