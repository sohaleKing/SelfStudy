//The Array.from(obj) method returns an array from any iterable obj (like the string!).

let str = "soheyl Rahgozar";
const newArr = Array.from(str);
console.log(newArr);

//SNTAX => Array.from(object, mapFunction, thisValue)

const newArr2 = Array.from(str, function (elem, index) {
  //only takes two parameters, elem and index
  if (elem === " ") console.log(`you have a space on index of ${index}`);
});
