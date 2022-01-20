const arr1 = ["soheyl", "ali", "john", "ericka", "claudia", "nicole", "lexy"];
const arr2 = [4, 3, 12, 8, 10, 7, 5, 1, 33];
//The length property sets or returns the number of elements in an array. its not a function!
console.log("arr length", arr1.length);
arr2.length = 12; //so it will expand the array size with new element of undefined!
console.log(arr2);
//to remove from arr2 =>
arr2.length = 2; //will keep only the first 2 elements
console.log(arr2);
//use length in iterable loops
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
