//#1
document.querySelector("#grandParent").addEventListener(
    "click",
    () => {
        console.log("grandParents Clicked!")
    },
    false //bubbling
)
//#2
document.querySelector("#parent").addEventListener(
    "click",
    () => {
        console.log("parents Clicked!")
    },
    true //trickling
)
//#3
document.querySelector("#child").addEventListener(
    "click",
    () => {
        console.log("child Clicked!")
    },
    false //bubbling
)
// check the sequence of console log to see how it works
//w3c cycle its cpaturing first then bubbling!!
// menas 2 then 3 1
//since all these event are so expensive for the system we can stop them like this

//#1
document.querySelector("#grandParent2").addEventListener(
    "click",
    () => {
        console.log("grandParents Clicked!")
    },
    false
)
//#2
document.querySelector("#parent2").addEventListener(
    "click",
    (e) => {
        console.log("parents Clicked!")
        e.stopPropagation()
    },
    false
)
//#3
document.querySelector("#child2").addEventListener(
    "click",
    () => {
        console.log("child Clicked!")
    },
    false
)
//if the propagation flag was true! tricking all other events called!! since you put it at the child (nested nested heirachy!)
