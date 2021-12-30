//check the given array of characters is all vowels?
const arrOfCharacters = ["I", "e", "o", "i", "A", "a", "e", "x"];
//=============================================================
// const vowels = "aeiouAEIOU";
// HINT: use the string method `vowels.indexOf(charToTest)`
//The indexOf() method returns the position of the first occurrence of a specified value in a string.
//returns -1 if the value is not found. is case sensitive.

console.log(
  "is all vowel?",
  arrOfCharacters.every((elem) => {
    let vowel = "aeuioAEUIO";
    return vowel.indexOf(elem) !== -1;
  })
);
