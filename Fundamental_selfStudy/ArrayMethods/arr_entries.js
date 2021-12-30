//arr.entries() method returns an Array Iterator object with key/value pairs:
//
const userArray = ["Soheyl", "Rahgozar", 30, true];
const userArray_IndexedArray = userArray.entries();
console.log(userArray_IndexedArray); //wont help you to see the properties but you can iterate to it

for (currentIndex of userArray_IndexedArray) {
  //key as property would be from 0 to number of properties
  console.log(currentIndex);
}
//does not change the original array.
