// arr.copyWithin() copies array elements to another position in the array. overwrites the existing values.
//does not add items to the array. its an inside copy in elements
// Syntax => array.copyWithin(target, start, end)

const arr1 = ["soheyl", "ali", "john", "nicole", "claudia"];

arr1.copyWithin(0, arr1.length - 1); // copy the last one into the first one

console.log(arr1);

arr1.copyWithin(3, 0, 2); //copy the first two element into the 4th and 5th element
console.log(arr1);

//The valueOf() method returns the array itself. like a copy! does not change the original array.

const firstCopyArr1 = arr1.valueOf();
console.log(firstCopyArr1);

const secondCopyArr1 = [...arr1];
console.log(secondCopyArr1);
