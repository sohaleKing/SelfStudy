//arr.slice() returns selected elements in an array, as a new array.
//it selects from a given start, up to a (not inclusive) given end.  does not change the original array.
//Syntax => array.slice(start, end) //given end index is not included!
//start and end are optional => start default if index 0 and end is the last one

const arr1 = ["soheyl", "nicole", "tannaz", "erick", "john", "mary"];
let _ = undefined; //to skip an argument pass undefined!
console.log(arr1.slice(2, 4));
console.log(arr1); //does not change the original array
console.log(arr1.slice(_, 3)); //index 3 (4th) ins not included!
console.log(arr1.slice(_, _)); //the same as arr1.slice()

//start, end-> Negative numbers select from the end of the array.
console.log("from end= ", arr1.slice(-3, -2));
console.log("from end= ", arr1.slice(-3, -1));
console.log("from end= ", arr1.slice(-2, -1));
console.log("from end= ", arr1.slice(-4, -1)); //from end start from 1 not zero!
