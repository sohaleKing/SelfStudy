let LastDiv = document.getElementById("lastDiv")
LastDiv.style.borderBottom = "1px dashed grey"
//document.getElementById("LastDiv").style.borderBottom = "1px dashed grey"

let pElement = document.getElementsByTagName("p")
//this would give you all elements in an array!!
// to access the first one would be the first element of the array
pElement[0].innerHTML = "changed paragraph1"
pElement[2].style.color = "red"

document.getElementsByClassName("class1")[0].style.fontSize = "32px"
//let classElement = document.getElementsByClassName("class1")
//classElement[0].style.fontSize = "24px"

let byName = document.getElementsByName("firstName")
byName[0].disabled = "true"

let menuObj = document.querySelector("ul.link")
menuObj.firstChild.nextSibling.innerHTML = "changed Menu"

let MenuArr = document.querySelectorAll("ul.link")
MenuArr[0].childNodes[1].style.color = "red"

document.querySelector("ul.link li+p").addEventListener("click", (item) => {
    item.msg = function () {
        alert("hi")
    }
    console.log(item)
    item.msg()
})
