const arr1 = [5, 13, 21, 27, 9, 13, 15, 8, 13, 15, 16, 24, 33];
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
