const arr1 = [5, 13, 21, 27, 9, 13, 15, 8, 13, 15, 16, 24, 33];
//========array.indexOf(item, [start])======================
// array.indexOf() method returns the first index (position) of a specified value.
//searches from left to right(starts at the first element and ends at the last). returns -1 if the value is not found.

console.log(arr1.indexOf(13)); //=>1
console.log(arr1.indexOf(13, 2)); //it will start from 3rd element(index =2) and return the first found index //=>5
console.log(arr1.indexOf(130)); //if not availabe return -1
