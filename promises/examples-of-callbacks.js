// document.addEventListener("click", () => {})

function callback1() {
    alert("clicked")
}

document.addEventListener("click", callback1)

function callback2() {
    const data = client.getData()
    populateDom(data)
}

connectToDatabase(callback2)
