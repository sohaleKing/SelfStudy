// Q4

// Using .every()   get the boolean (true/false) of wether or not each element in the array is a vowel

const vowels = "aeiouAEIOU"
// HINT: use the string method `vowels.indexOf(charToTest)`

const arrOfCharacters = ["I", "e", "o", "i", "A", "a", "e", "u"]

const isAllVowels = arrOfCharacters.every((elem) => {
    return vowels.indexOf(elem) >= 0
})
console.log(isAllVowels)
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.

//The indexOf() method returns the position of the first occurrence of a specified value in a string.
//indexOf() returns -1 if the value is not found.
//indexOf() is case sensitive.
