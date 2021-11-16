// Q1

const arrOfTuples = [
    ["Kylie", "Dowd"],
    ["Christian", "Henderson"],
    ["Jane", "Alsop"],
    ["Wanda", "Parsons"],
    ["Stephanie", "Taylor"],
]

// Using .map()   convert arrOfTuples into an array of strings with the full name "arrOfStrFullName"

const arrOfStrFullName = arrOfTuples.map((elem) => {
    return `${elem[0]} ${elem[1]}`
})

console.log(arrOfStrFullName)
