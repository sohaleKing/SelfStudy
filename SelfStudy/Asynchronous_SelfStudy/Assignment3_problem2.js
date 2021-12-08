fetch("/myServer")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
