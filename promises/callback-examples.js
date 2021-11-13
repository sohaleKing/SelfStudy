// Callbacks can be used for async

// Example-1 : do something (in the future) when the user clicks
function callback1() {
    alert("clicked!")
}

document.addEventListener("click", callback1)

// Example-2: do something after we connect to the database (like populate the DOM)
function callback2() {
    const data = client.getData()
    populateDom(data)
}

connectToDatabase(callback2)
