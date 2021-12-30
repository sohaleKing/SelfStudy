/*
Syntax
array.fill(value, start, end)
start and end index are optional,if there is no, all elements will be filled.
arr.fill() specified all elements in an array with a value. overwrites the original array
*/

array1 = []; //first way to define a new array
array2 = new Array(5).fill(0); //will define a new array with 4 elements all zero -second way to define!
console.log(array2);
array3 = [5, 20, 55, 25, 10, 8, 9, 10];
array3.fill(0, 3, 6); //the starting index is included to be filled but the ending is not!!
console.log(array3);
