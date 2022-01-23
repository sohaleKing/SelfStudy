//arr.entries() method returns an Array Iterator object with key/value pairs:
//
const userArray = ["Soheyl", "Rahgozar", 30, true];
const userArray_IndexedArray = userArray.entries();
console.log(userArray_IndexedArray); //wont help you to see the properties but you can iterate to it

for (index of userArray) {
  console.log(index); //=> Soheyl Rahgozar 30 true
}

for (currentIndex of userArray_IndexedArray) {
  //key as property would be from 0 to number of properties
  console.log(currentIndex);
  //=> [ 0, 'Soheyl' ] [ 1, 'Rahgozar' ] [ 2, 30 ] [ 3, true ]
}
//does not change the original array.
