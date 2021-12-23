//array = [64 25 12 22 11]

// Find the minimum element in arr[0...4]
// and place it at beginning
//[11 25 12 22 64]

// Find the minimum element in arr[1...4]
// to find a minimum you need two nested for loop
// and place it at beginning of arr[1...4]
//[11 12 25 22 64]

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
//[11 12 22 25 64]

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
//[11 12 22 25 64]
const swapElement = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};
const selectionSort = (arr) => {
  if (arr.length < 2) return arr;
};
const testCase_array = [1, 5, 6, 0, 2, 3, 0];
console.log(findMin(testCase_array));
//console.log(selectionSort(testCase_array));
