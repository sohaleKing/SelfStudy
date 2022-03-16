// find the minimum element in array!
// 1> first approach is finding the only the the smallest one

const findMinElm = (arr) => {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

// 2> Second approach is finding the smallest element and return the value and index through an object!

const FindMinElm_indx = (arr) => {
  let minimumObj = {};
  minimumObj.value = arr[0];
  minimumObj.index = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < minimumObj.value) {
        minimumObj.value = arr[j];
        minimumObj.index = j;
      }
  }
  return minimumObj;
};

// const testCase = [-13, 0, 1, -8, 2, -15];
// console.log("min = ", findMinElm(testCase));
// console.log("min = ", FindMinElm_indx(testCase));

module.exports = {
  FindMinElm_indx,
  findMinElm,
};
