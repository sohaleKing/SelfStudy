//The Array.from(obj) method returns an array from any iterable obj (like the string!).

let str = "soheyl Rahgozar";
let str1 = "dad";
let str2 = "i am a dad amai";
const newArr = Array.from(str);
console.log(newArr);

//SNTAX => Array.from(object, mapFunction, thisValue)

const newArr2 = Array.from(str, function (elem, index) {
  //only takes two parameters, elem and index
  if (elem === " ")
    console.log(`you have a space on index of ${index} the array`);
});

const palindrom = (string) => {
  const arrObj = Array.from(string); //return an iterable array from string
  arrObj.forEach((elem, index, arr) => {
    //check if there is a space in order to remove
    elem === " " && arr.splice(index, 1);
  });
  const firstPart = arrObj.slice(0, arrObj.length / 2);
  const secondPart = arrObj
    .slice(arrObj.length / 2 + 1, arrObj.length)
    .reverse();
  for (let i = 0; i < arrObj.length / 2; i++) {
    if (firstPart[i] !== secondPart[i]) return "it is not palindrom";
  }
  return "its palindrom";
};
console.log(palindrom(str));
console.log(palindrom(str1));
console.log(palindrom(str2));
