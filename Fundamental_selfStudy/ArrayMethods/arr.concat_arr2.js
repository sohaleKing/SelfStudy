//The arr1.concat(arr2) method returns (joins) two or more arrays a new array,
//containing the jarray1.concat(array2, array3, ..., arrayX)oined arrays. does not change the existing arrays.
//Syntax =>

arr1 = [4, null, 22];
arr2 = [true, 2];
arr3 = [];
arr4 = [7, "soheyl", undefined, { name: "ali" }];

const newArr = arr1.concat(arr2, arr3, arr4); //the empty array will be ignored in newArray elements
console.log(newArr);
//the easier way is using ...spread syntax

const newArr2 = [...arr1, ...arr2, ...arr3, ...arr4];
console.log(newArr2);
