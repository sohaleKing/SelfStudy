/*
Syntax
array.fill(value, start, end)
start and end index are optional,if there is no, all elements will be filled.
arr.fill() specified all elements in an array with a value. overwrites the original array
end is not included in filling action. not change the array length, its chainable
*/

const array1 = []; // const array1 = new Array()
//with fill you cant change the array length
const array2 = new Array(5).fill(0); //will define a new array with 5 elements  all zero / chanined here
console.log(array2);
const array3 = [5, 20, 55, 25, 10, 8, 9, 10];
array3.fill(0, 3, 6); //the starting index is included to be filled but the ending is not!!
console.log(array3);
