const arr1 = [5, 13, 21, 27, 9, 13, 15, 8, 13, 15, 16, 24, 33];
//========array.indexOf(item, [start])======================
// array.indexOf() method returns the first index (position) of a specified value.
//searches from left to right(starts at the first element and ends at the last). returns -1 if the value is not found.

console.log(arr1.indexOf(13));
console.log(arr1.indexOf(13, 2)); //it will start from 3rd element(index =2) and return the first found index
console.log(arr1.indexOf(130)); //if not availabe return -1

//===========arr.lastIndexOf(item, [start]) ======================
//The lastIndexOf() method returns the last index (position) of a specified value.
//searches from right to left (starts at the last element and ends at the first) returns -1 if the value is not found.

console.log(arr1.lastIndexOf(13));
//its so confusing using start or end on lastIndexOf()
console.log(arr1.lastIndexOf(130));

//===========arr.findIndex(callback) ======================
//executes a function for each array element. returns the index (position) of the first element that passes a test.
//returns -1 if no match is found.does not execute the function for empty array elements. does not change the original array.
//callback needs to have return since finIndex will the callback returns the fist index which pass the test(true)
console.log(
  arr1.findIndex((x) => {
    return x > 20; //like every! it must have return!!!!!!
  })
);

const isEven = (x) => {
  return x % 2 === 0;
};
console.log(arr1.findIndex(isEven));

//================arr.find(callback)===================
//The arr.find(callback) method returns the value of the first element that passes a test.
// retuns undefined if no elements are found. (findIndex return -1)
//executes a function for each array element. does not execute for empty elements.does not change the original array.

console.log(
  arr1.find((x) => {
    return x % 3 === 0;
  })
);

//====================example===========================
const array1 = [4, 3, 2, 10, 22, 4, 2, 40];

console.log("indexOf = ", array1.indexOf(2)); //=> will return first found index = 2
console.log("lastIndexOf", array1.lastIndexOf(2)); //will return the last found index = 6
console.log(
  "findIndex = ",
  array1.findIndex((x) => x === 2)
); //the same as indexOf but need a callback, first index who pass the callback test = 2
console.log(
  "find = ",
  array1.find((x) => x > 10) //will return the value of the first element which passes the callback test = value of 22
);
