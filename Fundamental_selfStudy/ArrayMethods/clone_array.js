const array = ["ali", "azar"];

const copyArray = array;
//with assign you can not copy an array! you just assign the pointer! so any change on the first one would affect the second
const copyArray2 = array.valueOf();
//this one also return the array itself, like a copy! it would be pointing to the same array
const cloneArray1 = [...array];
// that would be the right way

array[0] = "soheyl"; //modify the original array

console.log("array = ", array);
console.log("copyArray =", copyArray);
console.log("copyArray2 = ", copyArray2);
console.log("cloneArray1 = ", cloneArray1);
