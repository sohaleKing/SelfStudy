// Q1

const arrOfTuples = [
    ["Kylie", "Dowd"],
    ["Christian", "Henderson"],
    ["Jane", "Alsop"],
    ["Wanda", "Parsons"],
    ["Stephanie", "Taylor"],
]

// Using .map()   convert arrOfTuples into an array of strings with the full name "arrOfStrFullName"

// const arrOfStrFullName =

// Q2

// Using .forEach()   console.log each element of newArr

// Q3

const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Using .reduce()   find the "special" sum of these number in the following manner 1-2*2+3*3-4*4+5*5-6*6+7*7...
// use the modulus (remainder) operator % to determine if the current element is even or odd

// taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const reducer = (previousValue, currentValue) => {
    if (currentValue % 2) {
        // number is odd
    } else {
        // number is even
    }
}

// if implemented correctly, you should get -78 as the answer

// Q4

// Using .every()   get the boolean (true/false) of wether or not each element in the array is a vowel

const vowels = "aeiouAEIOU"
// HINT: use the string method `vowels.indexOf(charToTest)`

const arrOfCharacters = ["I", "e", "o", "i", "A", "a", "e", "u"]

// const isAllVowels = arrOfCharacters.every(.....)
