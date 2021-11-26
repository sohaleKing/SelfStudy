function asyncAwait() {
    async function myFunction() {
        console.log("A")
        await fetch("/myServer")
        console.log("B")
    }

    myFunction()
    console.log("C")
}

function promiseThen() {
    function myFunction() {
        console.log("A")
        fetch("/myServer")
            .then((res) => {
                console.log("D")
                return res.text()
            })
            .then((data) => console.log(data))
        console.log("B")
    }

    myFunction()
    console.log("C")
}

//asyncAwait()
promiseThen()
