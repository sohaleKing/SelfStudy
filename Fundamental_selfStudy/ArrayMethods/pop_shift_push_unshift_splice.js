//==============REMOVE=================== pop from the last, shift from begining!

//arr.pop() removes (pops) the last element of an array. changes the original array. returns the removed element.
const arr1 = [4, 3, 12, 9, 7, 10, 20, 6];
console.log(arr1.pop()); //very usefull for LIFO!
console.log(arr1.pop());
console.log(arr1);

//arr.shift() method removes the first item of an array. changes the original array. returns the shifted element.
console.log(arr1.shift()); //very useful  for FIFO
console.log(arr1.shift());
console.log(arr1);

//==================ADD==================push to the last, unshift to the beginning!

//arr.push() adds new items to the end of an array. changes the original array. returns the new length.
arr1.push(8);
console.log("array new length = ", arr1.push(1)); //adds 1 to the end of the array and returns the new length
console.log(arr1);

//arr.unshift() adds new elements to the beginning of an array. changes the original array. returns the new length.
arr1.unshift(5);
console.log("array new length = ", arr1.unshift(0));
console.log(arr1);

//===========ADD/REMOVE ================splice

//arr.splice() adds and/or removes array elements. changes the original array
//Syntax => array.splice(index, howmany_Removed, item1 to add, ....., itemX to add)
//******returns an array of removed items from start index to howmany after */
console.log(arr1.splice(2, 4)); //returns an array from index 2 (3rd element) to 4 element after!
console.log(arr1); //the original array got modified! from index 2 to 4 element after removed from that array!

console.log(arr1.splice(1, 2, 2, 2, 3, 3)); //returns an array of removed item from 2nd element with 2 element
//(2nd and 3rd) removed and 2, 2, 3, 3 added from 2nd position! so it pushed the original 4th element to last!
console.log(arr1);

const array = ["ali", "azar"];
array.push("bye");
array.unshift("salam");
console.log(array);
let lastone = array.pop();
let fitstone = array.shift();
console.log(`${fitstone} and ${lastone}`);
console.log(array);
