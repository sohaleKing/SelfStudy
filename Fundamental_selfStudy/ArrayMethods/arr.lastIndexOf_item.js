const arr1 = [5, 13, 21, 27, 9, 13, 15, 8, 13, 15, 16, 24, 33];
//===========arr.lastIndexOf(item, [start]) ======================
//The lastIndexOf() method returns the last index (position) of a specified value.
//searches from right to left (starts at the last element and ends at the first) returns -1 if the value is not found.

console.log(arr1.lastIndexOf(13)); //=> 8
//its so confusing using start or end on lastIndexOf()
console.log(arr1.lastIndexOf(130)); //=>-1
