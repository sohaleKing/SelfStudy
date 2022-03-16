// The arr.filter(callback) method creates a new array filled with elements that return true provided by a function.
//does not execute the function for empty elements.does not change the original array.

const arr1 = [4, 3, 12, 15, 16, 8, 9, 1, 10, 4, 5];

const evenNum = (num) => {
  return num % 2 === 0;
};

console.log(arr1.filter((elem) => elem > 10));
console.log(arr1.filter(evenNum));
//arr.filter(callback) returns an array

//will be run for all elements, the one who return true at test will be put in the new filtered array and return that to us
