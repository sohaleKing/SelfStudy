//arr.some(callback) checks whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true;
// otherwise it returns false. It doesn't modify the array.
//some like saying any.... would return true if even one matches and every(all), all the elems should pass the text
//
const arr1 = ["a", "e", "O", "L"];
vowels = "aeoiyuAEOIYU";

const isAnyVowels = arr1.some((elem) => {
  return vowels.indexOf(elem) >= 0; //you need return on callback otherwise you get all flase
});

console.log("isAnyVowels = ", isAnyVowels);

const arr2 = [5, 4, -2, 10, 3, -4, 2, 10, 11];
const arr3 = [5, 4, 2, 10, 3, 4, 2, 10, 11];

const isAnyNegative = (arr) => {
  let hasNegative = arr.some((x) => x < 0);
  console.log("is any negative", hasNegative);
};
isAnyNegative(arr2);
