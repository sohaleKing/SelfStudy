function asyncAwait() {
    async function test() {
        console.log("Ready")
        let example = await fetch("http://httpbin.org/get")
        console.log("I will print second")
    }

    test()
    console.log("I will print first")
}

function promiseThen() {
    function test() {
        console.log("Ready")
        let example = fetch("http://httpbin.org/get").then((res) => {
            console.log("This is inside the then() block")
        })
        console.log(
            "This is after the fetch statement where we are now executing other code that is not async"
        )
    }

    test()
    console.log("this is after the entire function")
}

asyncAwait()
