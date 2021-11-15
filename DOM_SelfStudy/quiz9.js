const newDiv = document.createElement("div")
newDiv.className = "hello"
newDiv.setAttribute("title", "Hello Div")
newDiv.style.fontSize = "30px"
const newDivText = document.createTextNode("Hello world")

//

const container = document.querySelector("header .container")
const h1 = document.querySelector("header h1")
container.insertBefore(newDiv, h1)
