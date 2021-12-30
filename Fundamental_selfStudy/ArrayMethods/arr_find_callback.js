//The arr.find(callback) method returns the value of the first element that passes a test.
// retuns undefined if no elements are found. (findIndex return -1)
//executes a function for each array element. does not execute for empty elements.does not change the original array.
const arr1 = [4, 3, 2, 12, 18, 11, 26];
//arr.findIndex(callback)returns only the index of elem which passes the test// arr.find(callback) returns the value
console.log(
  "what is the value of the first elem which is greater than 15?",
  arr1.find((elem) => {
    return elem > 15; // if your callback doesnt have any return it will return undefined!
  })
);

const PositiveNum = (num) => num < 0;
arr1.push(-5); // if you comment this you wont see the message!
arr1.find(PositiveNum) && console.log("there is a negative number in array");

//********************************************************************** */
//arr.filter() returns all the value of elements which pass the test!
//arr.find() returns only the value of the first element whic pass the test
