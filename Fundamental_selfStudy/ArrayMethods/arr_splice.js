//arr.splice() adds and/or removes array elements. changes the original array
//Syntax => array.splice(index, howmany_Removed, item1 to add, ....., itemX to add)
//******returns an array of removed items from start index to howmany after */
const arr1 = [4, 3, 12, 9, 7, 10, 20, 6];
console.log(arr1.splice(2, 4)); //returns an array from index 2 (3rd element) to 4 element after!
//=> [ 12, 9, 7, 10 ]
console.log(arr1); //the original array got modified! from index 2 to 4 element after removed from that array!
//=>[ 4, 3, 20, 6 ]

console.log(arr1.splice(1, 2, 2, 2, 3, 3)); //returns an array of removed item from 2nd element with 2 element
//=>[ 3, 20 ]
//(2nd and 3rd) removed and 2, 2, 3, 3 added from 2nd position! so it pushed the original 4th element to last!
console.log(arr1);
//=> [ 4, 2, 2, 3, 3, 6 ]
