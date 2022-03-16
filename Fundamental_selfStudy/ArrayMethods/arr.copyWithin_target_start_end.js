// arr.copyWithin() copies array elements to another position in the array. overwrites the existing values.
//does not add items to the array. its an inside copy in elements
// Syntax => array.copyWithin(target, start, end)
//end is not included in copy! the array length wont changes

const arr1 = ["soheyl", "ali", "john", "nicole", "claudia"];
const arr2 = [4, 3, 2, 7, 9, 6];

arr1.copyWithin(0, arr1.length - 1); // copy the last one into the first one

console.log(arr1);

arr1.copyWithin(3, 0, 2); //copy the first two element into the 4th and 5th element
console.log(arr1);

console.log(arr2.copyWithin(3, 0, 4)); //it returns the array where you copied array elements to another position
//its chainable (arr.copyWithin(1,0)).copyWithin(1,0) for example

const arr3 = [2, 4, 3, 5, 6, 4, 8, 4, 22, 1, 1, 2, 0, 13, 14, 9];
const copyFirst_All = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    arr.copyWithin(i, 0);
  }
  console.log(arr);
};
copyFirst_All(arr2);
