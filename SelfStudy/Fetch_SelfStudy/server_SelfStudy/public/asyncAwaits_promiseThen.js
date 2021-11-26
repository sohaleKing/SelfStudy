function asyncAwait() {
    console.log("*********Async/Await Scenario********")
    async function myFunction() {
        console.log("A")
        let res = await fetch("/myServer")
        console.log("D")
        let data = await res.text()
        console.log(data)
        //promise resolved!!
        console.log("B")
    }

    myFunction()
    console.log("C")
}

function promiseThen() {
    console.log("********Promis/Then Scenario**********")
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
