const arr1 = ["hello", "world", "soheyl", "rahgozar"];
const arr2 = [4, 3, 22, -4, 12, 10];

//Syntax => array.slice(start, end) //given end index is not included!
// slice does not change the original array.
const sliceArray = (arr, start, end) => {
  let _result = arr.slice(start, end);
  console.log("sliced array = ", _result);
  console.log("orginal array when sliced= ", arr); //not changed
  return _result;
};

//Syntax => array.splice(index, how many should be Removed, item1 to add, ....., itemX to add)
//changes the original array
const spliceArray = (arr, startIndex, numToRemove, ...adds) => {
  let _result = arr.splice(startIndex, numToRemove, adds);
  console.log("spliced array = ", _result);
  console.log("orginal array when spliced= ", arr); //changed
  return _result;
};

sliceArray(arr1, 0, 3); //=> sliced array =  [ 'hello', 'world', 'soheyl' ]
sliceArray(arr1, 2, undefined); //will show from the 3rd item to the end //=> sliced array =  [ 'soheyl', 'rahgozar' ]

spliceArray(arr1, 2, 2, "new soheyl", "new Rahgozars");
