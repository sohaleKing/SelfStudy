fetch("/myServer")
    .then((res) => {
        return res.text()
    })
    .then((data) => {
        const heading1 = document.createElement("h1")
        const headingText = document.createTextNode("Ansync Blog")
        heading1.appendChild(headingText)
        document.body.appendChild(heading1)
        const paragraph1 = document.createElement("p")
        paragraph1.innerHTML = data
        paragraph1.style.fontSize = "24px"
        document.body.appendChild(paragraph1)
    })
