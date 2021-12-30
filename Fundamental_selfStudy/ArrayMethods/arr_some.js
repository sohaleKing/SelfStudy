//arr.some(callback) checks whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true;
// otherwise it returns false. It doesn't modify the array.
//some(any) would return true if even one matches and every(all), all the elems should pass the text
//
const arr1 = ["a", "e", "O", "L"];
vowels = "aeoiyuAEOIYU";

const isAnyVowels = arr1.some((elem) => {
  return vowels.indexOf(elem) >= 0;
});

console.log("isAnyVowels = ", isAnyVowels);
